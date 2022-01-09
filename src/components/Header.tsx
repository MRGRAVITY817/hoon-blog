import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsLightbulbOff, BsLightbulb, BsTypeH3 } from 'react-icons/bs';
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
  const [open, setOpen] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <header>
      <nav className="border-main dark:border-bright tablet:py-4 py-2 border-b-2">
        <div className="tablet:flex tablet:items-center tablet:justify-between hidden">
          <div className="grid grid-flow-col gap-8">
            <HeaderMenu title="Home" href="/" />
            <HeaderMenu title="Blog" href="/blog" />
            <HeaderMenu title="Projects" href="/projects" />
          </div>
          <button onClick={switchTheme} className="text-2xl">
            {typeof theme === 'undefined' ? (
              <h3>Loading...</h3>
            ) : theme === 'light' ? (
              <BsLightbulbOff />
            ) : (
              <BsLightbulb />
            )}
          </button>
        </div>
        <div className="tablet:hidden flex items-center justify-between">
          <button onClick={switchTheme} className="text-2xl">
            {typeof theme === 'undefined' ? (
              <h3>Loading...</h3>
            ) : theme === 'light' ? (
              <BsLightbulbOff />
            ) : (
              <BsLightbulb />
            )}
          </button>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};
