import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { MobileNav } from './MobileNav';

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
  const { data: session, status } = useSession();

  const signUserOut = async () => {
    if (window.confirm('Confirm sign out?')) {
      await signOut();
    }
  };

  return (
    <header>
      <nav
        id="navigator"
        className="border-main dark:border-bright tablet:py-4 py-2 border-b-2"
      >
        <div className="tablet:flex tablet:items-center tablet:justify-between hidden">
          <div className="grid grid-flow-col gap-8">
            <HeaderMenu title="Home" href="/" />
            <HeaderMenu title="Blog" href="/blog" />
            <HeaderMenu title="Projects" href="/projects" />
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
        <div className="tablet:hidden flex items-center justify-end">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};
