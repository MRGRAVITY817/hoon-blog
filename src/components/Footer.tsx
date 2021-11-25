import Link from 'next/link';

const FooterMenu: React.FC<{ title: string; href: string }> = ({
  title,
  href
}) => {
  return (
    <Link href={href}>
      <a className="tablet:text-xl tablet:mx-4 mx-2 text-lg font-bold">
        {title}
      </a>
    </Link>
  );
};

const FooterMenuContainer: React.FC = ({ children }) => {
  return <div className="grid grid-flow-row gap-4">{children}</div>;
};

export const Footer = () => {
  return (
    <footer className="tablet:pt-8 tablet:pb-12 pt-4 pb-6 border-t-2">
      <div className="flex items-start justify-around">
        <FooterMenuContainer>
          <FooterMenu title="Home" href="/" />
          <FooterMenu title="About Hoon" href="/about" />
          <FooterMenu title="Blog" href="/blog" />
        </FooterMenuContainer>
        <FooterMenuContainer>
          <FooterMenu title="Instagram" href="/instagram" />
          <FooterMenu title="Facebook" href="/facebook" />
          <FooterMenu title="Twitter" href="/twitter" />
        </FooterMenuContainer>
      </div>
    </footer>
  );
};
