import Link, { LinkProps } from 'next/link';
import Image, { ImageProps } from 'next/image';

const CustomLink: React.FC<LinkProps> = ({ href, ...props }) => {
  const isInternalLink =
    typeof href === 'string' && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const RoundedImage: React.FC<ImageProps> = (props) => {
  return (
    <div className="tablet:my-12 h-96 relative w-full my-6">
      <Image
        alt={props.alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        {...props}
      />
    </div>
  );
};

const MDXComponents = {
  a: CustomLink,
  Image: RoundedImage
};

export default MDXComponents;
