import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsLightbulbOff, BsLightbulb } from 'react-icons/bs';

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
      <nav className="py-4 border-b-2">
        <div className="tablet:flex tablet:items-center tablet:justify-between hidden">
          <div className="grid grid-flow-col gap-8">
            <HeaderMenu title="Home" href="/" />
            <HeaderMenu title="Blog" href="/blog" />
            <HeaderMenu title="Projects" href="/projects" />
            <HeaderMenu title="Course" href="/course" />
            <HeaderMenu title="Dashboard" href="/dashboard" />
          </div>
          <button onClick={switchTheme} className="text-2xl">
            {theme === 'light' ? <BsLightbulbOff /> : <BsLightbulb />}
          </button>
        </div>
        <div className="tablet:hidden flex justify-between">
          <button onClick={switchTheme} className="text-2xl">
            {theme === 'light' ? <BsLightbulbOff /> : <BsLightbulb />}
          </button>
          <div className="relative flex justify-end">
            <button
              onClick={() => setOpen(!open)}
              className="text-lg font-medium"
            >
              Menu
            </button>
            {open && (
              <div
                onClick={() => setOpen(false)}
                className="bg-bright dark:bg-dark absolute z-40 grid grid-flow-row gap-2 p-2 mt-8 border-2"
              >
                <HeaderMenu title="Home" href="/" />
                <HeaderMenu title="Blog" href="/blog" />
                <HeaderMenu title="Projects" href="/projects" />
                <HeaderMenu title="Course" href="/course" />
                <HeaderMenu title="Dashboard" href="/dashboard" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
