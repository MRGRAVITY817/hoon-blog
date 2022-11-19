import { LINKEDIN_PROFILE, TWITTER_PROFILE } from '@utils/constants';
import Link from 'next/link';

const FooterMenu: React.FC<{ title: string; href: string }> = ({
  title,
  href
}) => {
  return (
    <Link href={href}>
      <a className="tablet:text-xl text-lg font-medium">{title}</a>
    </Link>
  );
};

export const Footer = () => {
  return (
    <footer className="tablet:pt-8 tablet:pb-12 border-main dark:border-bright pt-4 pb-6 border-t-2">
      <div className="flex flex-row items-center justify-center gap-12">
        <FooterMenu title="LinkedIn" href={LINKEDIN_PROFILE} />
        <FooterMenu title="Twitter" href={TWITTER_PROFILE} />
      </div>
    </footer>
  );
};
