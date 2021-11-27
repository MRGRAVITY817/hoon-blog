import Link from 'next/link';

const FooterMenu: React.FC<{ title: string; href: string }> = ({
  title,
  href
}) => {
  return (
    <Link href={href}>
      <a className="tablet:text-xl tablet:mx-4 mx-2 text-lg font-medium">
        {title}
      </a>
    </Link>
  );
};

const twitterProfile = 'https://twitter.com/coderound817';
const facebookProfile = '';
const instagramProfile = 'https://www.instagram.com/coderoundhoon/';

export const Footer = () => {
  return (
    <footer className="tablet:pt-8 tablet:pb-12 pt-4 pb-6 border-t-2">
      <div className="tablet:grid-cols-3 grid grid-cols-2">
        <FooterMenu title="Home" href="/" />
        <FooterMenu title="About" href="/about" />
        <FooterMenu title="Blog" href="/blog" />
        <FooterMenu title="Instagram" href={instagramProfile} />
        <FooterMenu title="Facebook" href={facebookProfile} />
        <FooterMenu title="Twitter" href={twitterProfile} />
      </div>
    </footer>
  );
};
