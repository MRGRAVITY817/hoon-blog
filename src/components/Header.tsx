import Link from 'next/link';
import { useState } from 'react';

const HeaderMenu: React.FC<{ title: string; href: string }> = ({
  title,
  href
}) => {
  return (
    <Link href={href}>
      <a className="tablet:text-xl hover:underline tablet:mx-4 mx-2 text-lg font-medium transition-all">
        {title}
      </a>
    </Link>
  );
};

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="py-4 border-b-2">
        <div className="tablet:flex hidden">
          <HeaderMenu title="Home" href="/" />
          <HeaderMenu title="About Hoon" href="/about" />
          <HeaderMenu title="Blog" href="/blog" />
          <HeaderMenu title="Projects" href="/projects" />
          <HeaderMenu title="Dashboard" href="/dashboard" />
        </div>
        <div className="tablet:hidden relative flex justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="text-lg font-medium"
          >
            Menu
          </button>
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="bg-bright absolute z-40 grid grid-flow-row gap-2 p-2 mt-8 border-2"
            >
              <HeaderMenu title="Home" href="/" />
              <HeaderMenu title="About Hoon" href="/about" />
              <HeaderMenu title="Blog" href="/blog" />
              <HeaderMenu title="Projects" href="/projects" />
              <HeaderMenu title="Dashboard" href="/dashboard" />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
