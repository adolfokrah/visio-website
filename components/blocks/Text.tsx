import { RenderRichText } from 'visio-cms';

export default function Text({ text }: { text: string }) {
  return <RenderRichText htmlContent={text} />;
}
