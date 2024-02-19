import { collection, query, where, limit, orderBy, startAfter } from 'firebase/firestore';
import { useFirestoreQuery, useFirestoreInfiniteQuery } from '@react-query-firebase/firestore';
import { db } from './firebase';

const getEntriesQuery = ({
  termid = undefined,
  userid = undefined,
  order = undefined,
  count = undefined,
  infinite = false
} = {}) => {
  const ref = query(
    collection(db, 'Entries'),
    ...(termid ? [where('termid', '==', termid)] : []),
    ...(userid ? [where('userid', '==', userid)] : []),
    ...(order ? [orderBy(order, 'desc')] : []),
    ...(count ? [limit(count)] : [])
  );
  const queryKey = ['Entries', { termid, userid, order, count }];

  let entriesQuery;
  if (infinite && count) {
    // this is for infinite scrolling for the future
    entriesQuery = useFirestoreInfiniteQuery(queryKey, ref, (snapshot) => {
      const lastDoc = snapshot.docs[snapshot.docs.length - 1];
      return query(ref, startAfter(lastDoc));
    });
  } else {
    entriesQuery = useFirestoreQuery(queryKey, ref);
  }
  return entriesQuery;
};

export default getEntriesQuery;
