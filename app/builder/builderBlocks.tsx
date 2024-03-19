'use client';

import registeredBlocks from '@/components/blocks_registry';

import { BuilderSectionsLayout } from 'visio-cms';

const BuilderBlocks = ({ slug, apiKey }: { slug: string; apiKey: string }) => {
  return (
    <BuilderSectionsLayout
      slug={slug}
      registeredBlocks={registeredBlocks}
      apiKey={apiKey}
      projectId={process.env.NEXT_PUBLIC_PROJECT_ID || ''}
    />
  );
};
export default BuilderBlocks;
