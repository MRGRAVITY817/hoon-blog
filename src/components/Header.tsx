import Link from 'next/link';

const HeaderMenu: React.FC<{ title: string; href: string }> = ({
  title,
  href
}) => {
  return (
    <Link href={href}>
      <a className="tablet:text-xl hover:underline tablet:mx-4 mx-2 text-lg font-bold transition-all">
        {title}
      </a>
    </Link>
  );
};

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="tablet:py-4 border-b-2">
        <div className="flex">
          <HeaderMenu title="Home" href="/" />
          <HeaderMenu title="About Hoon" href="/about" />
          <HeaderMenu title="Dashboard" href="/dashboard" />
          <HeaderMenu title="Blog" href="/blog" />
          <HeaderMenu title="Projects" href="/projects" />
        </div>
      </nav>
    </header>
  );
};
