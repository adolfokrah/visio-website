'use client';

import registeredBlocks from '@/components/blocks_registry';
import customControllers from '@/components/controllers_registry';
import { Builder, type BuilderProps, type CustomControllers } from 'visio-cms';

const VisioBuilderPage = ({
  slug,
  apiKey,
}: Partial<BuilderProps> & {
  apiKey: string;
}) => {
  return (
    <Builder
      slug={slug || ''}
      registeredBlocks={registeredBlocks}
      customControllers={customControllers as CustomControllers[]}
      apiKey={apiKey}
      projectId={process.env.NEXT_PUBLIC_PROJECT_ID || ''}
    />
  );
};

export default VisioBuilderPage;
