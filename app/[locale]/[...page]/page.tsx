import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import RenderPage from './renderPage';

interface PageProps {
  params: {
    locale: string;
    page: string[];
  };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  let page = props.params?.page || ['home'];
  const slug = `${page.join('/')}`;
  const headersList = headers();

  let res = await fetch(`${process.env.NEXT_PUBLIC_VISIO_END_POINT}/api/pages/meta?slug=${slug}`, {
    next: { revalidate: 0 },
    method: 'GET',
    headers: {
      'x-api-key': `${process.env.API_KEY}`,
      'x-project-id': `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
    },
  });
  const meta = await res.json();
  const url = new URL(headersList.get('referer') || 'http://localhost:3000');

  return {
    metadataBase: new URL(meta?.origin || 'http://localhost:3000'),
    ...meta,
    openGraph: { ...meta?.openGraph, url: url.origin },
  };
}

export default async function Page(props: PageProps) {
  let page = props.params?.page || ['home'];
  const slug = `${page.join('/')}`;
  const locale = props.params.locale;
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  let res = await fetch(
    `${process.env.NEXT_PUBLIC_VISIO_END_POINT}/api/pages?slug=${slug}&locale=${locale}&token=${token?.value}`,
    {
      next: { revalidate: 0 },
      method: 'GET',
      headers: {
        'x-api-key': `${process.env.API_KEY}`,
        'x-project-id': `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
      },
    },
  );

  const data = await res.json();

  if (data.error != null) {
    redirect('/404');
  }
  const pageData = data.page;

  if (!locale) {
    redirect(`/${data?.locale}/${slug}`);
  }

  if (locale && data?.locale !== locale) {
    redirect(`/${data?.locale}/${locale}`);
  }

  return (
    <RenderPage
      data={pageData?.blocks || []}
      params={data.params}
      locale={locale || data?.locale}
      isValidToken={data.isValidToken}
      slug={slug}
    />
  );
}
