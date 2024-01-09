import { RenderRichText } from 'visio-cms';
import { Button } from '../ui/button';
import Link from 'next/link';

type PropsT = {
  headline: string;
  subTitle: string;
};
export default function HomeHero({ headline, subTitle }: PropsT) {
  return (
    <div className="vs-text-center vs-max-w-4xl vs-leading-6 vs-m-auto">
      <h1 className="vs-text-3xl md:vs-text-4xl lg:vs-text-6xl vs-font-extrabold">
        <RenderRichText htmlContent={headline} />
      </h1>

      <div className="vs-my-4 vs-max-w-lg vs-m-auto">
        <p>{subTitle}</p>
      </div>

      <div className="vs-flex vs-items-center vs-gap-2 vs-justify-center">
        <Link href="https://dashboard.visiocms.com">
          <Button>Get started</Button>
        </Link>
        <Button variant="outline">Get a demo</Button>
      </div>
    </div>
  );
}
