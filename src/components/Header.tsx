import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { MobileNav } from './MobileNav';
import { LightBulb } from './LightBulb';
import { useSetRecoilState } from 'recoil';
import { ToastState } from 'src/states/toastStates';

const HeaderMenu: React.FC<{ title: string; href: string }> = ({
  title,
  href
}) => {
  return (
    <Link href={href}>
      <a className="tablet:text-xl hover:underline text-lg font-medium transition-all">
        {title}
      </a>
    </Link>
  );
};

export const Header: React.FC = () => {
  const setToast = useSetRecoilState(ToastState);
  const { data: session, status } = useSession();
  const signUserOut = async () => {
    setToast({
      isOpen: true,
      messageType: 'confirm',
      message: 'Sign out?',
      confirm: () => signOut()
    });
  };

  return (
    <header>
      <nav
        id="navigator"
        className="border-main dark:border-bright tablet:py-4 py-2 border-b-2"
      >
        <div className="tablet:flex tablet:items-center tablet:justify-between hidden">
          <div className="flex items-center justify-between gap-12">
            <LightBulb />
            <div className="grid grid-flow-col gap-8">
              <HeaderMenu title="Home" href="/" />
              <HeaderMenu title="Blog" href="/blog" />
              <HeaderMenu title="Bits & Pieces" href="/bits" />
              <HeaderMenu title="Projects" href="/projects" />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-row items-center gap-6">
              {status === 'authenticated' && (
                <p>{`Hello, ${session?.user?.name}`}</p>
              )}
              {status === 'authenticated' ? (
                <button
                  onClick={signUserOut}
                  className="bg-main dark:bg-bright text-bright dark:text-main px-3 py-1 rounded-lg"
                >
                  Sign out
                </button>
              ) : (
                <Link href={'/auth/signin'}>
                  <a className="bg-main dark:bg-bright text-bright dark:text-main px-3 py-1 rounded-lg">
                    Sign in
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="tablet:hidden flex items-center justify-between">
          <LightBulb />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};
