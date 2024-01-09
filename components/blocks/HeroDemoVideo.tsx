import Image from 'next/image';
import { ImageT, LinkT } from 'visio-cms';

type PropsT = {
  image: ImageT;
  videoUrl: LinkT;
};
export default function HeroDemoVideo({ image }: PropsT) {
  return (
    <div className="vs-relative vs-max-w-5xl vs-m-auto">
      <Image
        width={image?.width || 0}
        height={image?.height || 0}
        src={image?.url || ''}
        sizes=""
        alt={image?.alt || ''}
        className="vs-object-contain vs-w-full vs-h-full "
      />

      <div className="vs-absolute vs-w-full vs-h-full vs-top-0 vs-z-0 vs-grid vs-place-content-center">
        <Image
          src="/play-button.svg"
          alt="play button"
          width={100}
          height={100}
          className="vs-object-contain vs-cursor-pointer"
          priority
        />
      </div>
    </div>
  );
}
