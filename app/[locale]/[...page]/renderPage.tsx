'use client';
import registeredBlocks from '@/components/blocks_registry';
import { JWTPayload } from 'jose';
import { EditPageButton } from 'visio-cms';
import { PageBlock } from 'visio-cms/types';
import RenderPageContent from 'visio-cms/RenderPageContent';

const RenderPage = ({
  data,
  isValidToken,
  params,
  locale,
  slug,
}: {
  data: PageBlock[];
  isValidToken: JWTPayload | null;
  params: { [key: string]: string };
  locale: string;
  slug: string;
}) => {
  return (
    <>
      {isValidToken && <EditPageButton slug={slug} />}
      <RenderPageContent locale={locale} data={data} params={params} registeredBlocks={registeredBlocks} />
    </>
  );
};

export default RenderPage;
