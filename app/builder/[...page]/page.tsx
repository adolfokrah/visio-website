import VisioBuilderPage from './visioBuilderPage';

interface PageProps {
  params: {
    page: string[];
  };
}
const Page = async (props: PageProps) => {
  let slug = `${props.params.page.join('/')}`;

  return <VisioBuilderPage slug={slug} apiKey={process.env.API_KEY || ''} />;
};

export default Page;
