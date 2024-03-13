import { collection, query, where, limit, orderBy } from 'firebase/firestore';
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { db } from './firebase';

// CURRENTLY ORDERING WITH termid OR userid ONLY WORKS FOR 'likes' AND 'creationDate'
const getEntriesQuery = ({ termid, userid, order = 'likes', count } = {}) => {
  const ref = query(
    collection(db, 'Entries'),
    ...(termid ? [where('termid', '==', termid)] : []),
    ...(userid ? [where('userid', '==', userid)] : []),
    ...(order ? [orderBy(order, 'desc')] : []),
    ...(count ? [limit(count)] : [])
  );
  const queryKey = ['Entries', { termid, userid, order, count }];
  const entriesQuery = useFirestoreQuery(queryKey, ref);
  return entriesQuery;
};

export default getEntriesQuery;
