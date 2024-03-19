import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LinkT } from 'visio-cms';

type PropsT = {
  menus: {
    link: LinkT;
    label: string;
  }[];
  isShowBeta: 'yes' | 'no';
};

export default function NavBar({ menus, isShowBeta }: PropsT) {
  const menuHoverClass = 'hover:vs-text-brand-green-50 vs-duration-100 vs-transition-colors vs-ease-linear';
  return (
    <div className="vs-fixed vs-w-full vs-py-5 vs-top-0 vs-bg-white vs-z-40">
      <div className="vs-flex vs-sticky  vs-top-0 vs-items-center vs-justify-between vs-m-auto vs-max-w-6xl">
        <div className="vs-flex vs-items-center ">
          <Link href="/">
            <Image src="/visio.svg" alt="Next Logo" className="dark:vs-hidden" width={100} height={24} priority />
            <Image
              src="/visio_light.svg"
              alt="Next Logo"
              className="vs-hidden dark:vs-block"
              width={100}
              height={24}
              priority
            />
          </Link>
          {isShowBeta === 'yes' && <Badge variant={'outline'}>Beta</Badge>}
        </div>

        <div className="vs-flex vs-items-center vs-gap-4 text-sm vs">
          <ul className="vs-flex vs-items-center vs-gap-4 vs-border-r vs-border-slate-200 vs-pr-3">
            {menus.map((menu) => (
              <ul key={menu.label}>
                <Link href={menu.link?.url || ''} className={menuHoverClass} target={menu.link.target}>
                  {menu.label}
                </Link>
              </ul>
            ))}
          </ul>
          <Link className={menuHoverClass} href="https://dashboard.visiocms.com" target="_blank">
            Sign in
          </Link>
          <Link href="https://dashboard.visiocms.com/auth/signup" target="_blank">
            <Button>Get started for free</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
