import { useRef } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Autocomplete,
  AutocompleteItem,
  Textarea,
  Input,
  Button
} from '@nextui-org/react';
import LoadingCard from '../Dictionary/components/LoadingCard';
import { unpackTermsQuery } from '../../utils/unpackQuery';
import getTermsQuery from '../../utils/getTermsQuery';
import useCurrentUserData from '../../utils/useCurrentUserData';
import Text from '../../components/Text';
import useEntryAddition from './hooks/useEntryAddition';

const Add = () => {
  const { userData } = useCurrentUserData();
  const entryAddition = useEntryAddition();
  const selectedTermId = useRef();

  const termsQuery = getTermsQuery();
  const { status, data } = unpackTermsQuery(termsQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userid = userData.userid;
    const name = formData.get('term').trim();
    const definition = formData.get('definition').trim();
    const example = formData.get('example').trim();
    const tags = [
      ...new Set(
        formData
          .get('tags')
          .split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag !== '')
      )
    ];

    let termid =
      selectedTermId.current ||
      Object.keys(data).find((key) => data[key].toLowerCase() === name.toLowerCase());

    entryAddition({ termid, userid, definition, example, tags, name });
  };

  if (status === 'loading') {
    return <LoadingCard />;
  } else if (status === 'error') {
    return <div>Error occurred. Try again.</div>;
  }

  return (
    <section className="max-w-[55rem] pt-10">
      <Card className="dark:bg-slate-600 p-4">
        <form id="add-form" onSubmit={handleSubmit}>
          <CardHeader className="justify-center">
            <Text h1 className="font-semibold">
              New Definition
            </Text>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="my-5 flex gap-4">
              <Autocomplete
                isRequired
                allowsCustomValue
                disabled={entryAddition.isLoading}
                className="max-w-xs, w-full"
                aria-label="term-select"
                name="term"
                label="Term"
                labelPlacement="outside"
                placeholder="Select a term"
                defaultItems={Object.entries(data)}
                onSelectionChange={(key) => {
                  selectedTermId.current = key;
                }}
                popoverProps={{
                  classNames: {
                    content: 'dark:dark'
                  }
                }}>
                {([termid, termname]) => (
                  <AutocompleteItem key={termid} textValue={termname}>
                    {termname}
                  </AutocompleteItem>
                )}
              </Autocomplete>
              <Input
                name="tags"
                label="Tags"
                className="w-full"
                labelPlacement="outside"
                placeholder="A list of comma-seperated tags"
              />
            </div>
            <Textarea
              isRequired
              name="definition"
              label="Definition"
              labelPlacement="outside"
              placeholder="Your definition of the term"
            />
            <Textarea
              isRequired
              minRows={2}
              name="example"
              label="Example"
              labelPlacement="outside"
              placeholder="An example of how it's used in sentence"
            />
            <Button disabled={entryAddition.isLoading} color="primary" name="submit" type="submit">
              Post
            </Button>
          </CardBody>
        </form>
      </Card>
    </section>
  );
};

export default Add;
