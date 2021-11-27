import Link from 'next/link';

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
  return (
    <header>
      <nav className="py-4 border-b-2">
        <div className="flex">
          <HeaderMenu title="Home" href="/" />
          <HeaderMenu title="About Hoon" href="/about" />
          <HeaderMenu title="Blog" href="/blog" />
          <HeaderMenu title="Projects" href="/projects" />
          <HeaderMenu title="Dashboard" href="/dashboard" />
        </div>
      </nav>
    </header>
  );
};
