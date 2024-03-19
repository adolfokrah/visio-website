import { generateMetadata as meta } from '@/app/[locale]/[...page]/page';
import Page from '@/app/[locale]/[...page]/page';
import type { Metadata } from 'next';
interface PageProps {
  params: {
    locale: string;
    page: string[];
  };
}
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  let d = await meta(props);
  return d;
}
export default Page;
