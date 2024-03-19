'use client';

import registeredBlocks from '@/components/blocks_registry';
import { BuilderProps } from 'visio-cms/types';
import Builder from 'visio-cms/Builder';

const VisioBuilderPage = ({
  slug,
  apiKey,
  searchParam,
}: Partial<BuilderProps> & {
  apiKey: string;
  searchParam: string;
}) => {
  return (
    <Builder
      slug={slug || ''}
      registeredBlocks={registeredBlocks}
      apiKey={apiKey}
      searchParam={searchParam}
      projectId={process.env.NEXT_PUBLIC_PROJECT_ID || ''}
    />
  );
};

export default VisioBuilderPage;
