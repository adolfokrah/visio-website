'use client';
import registeredBlocks from '@/components/blocks_registry';
import { JWTPayload } from 'jose';
import { RenderPageContent, EditPageButton, type PageBlock, type GlobalBlock, Block } from 'visio-cms';

const RenderPage = ({
  data,
  isValidToken,
  slug,
}: {
  data: PageBlock[] | GlobalBlock[];
  isValidToken: JWTPayload | null;
  slug: string;
}) => {
  return (
    <>
      {isValidToken && <EditPageButton slug={slug} />}
      <RenderPageContent data={data} registeredBlocks={registeredBlocks as Block[]} />
    </>
  );
};

export default RenderPage;
