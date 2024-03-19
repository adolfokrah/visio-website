import VisioBuilderPage from './visioBuilderPage';

interface PageProps {
  params: {
    page: string[];
  };
  searchParams: {
    block: string;
  };
}
const Page = async (props: PageProps) => {
  const slug = `${props.params.page.join('/')}`;
  const block = `${props.searchParams.block}`;

  return <VisioBuilderPage slug={slug} searchParam={block} apiKey={process.env.API_KEY || ''} />;
};

export default Page;
