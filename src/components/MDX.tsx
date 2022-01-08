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

const RoundedImage: React.FC<ImageProps & { comment?: string }> = (props) => {
  return (
    <div className="tablet:my-12 my-6">
      <div className={`relative h-96 rounded-lg`}>
        <Image
          alt={props.alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          {...props}
        />
      </div>
      <p className="my-2 italic">{props.comment}</p>
    </div>
  );
};

// headings
const H1: React.FC = ({ children }) => {
  return <h1 className="font-semibold">{children}</h1>;
};

const H2: React.FC = ({ children }) => {
  return <h2 className="font-medium">{children}</h2>;
};

const H3: React.FC = ({ children }) => {
  return <h3 className="font-normal">{children}</h3>;
};

const P: React.FC = ({ children }) => {
  return <h3 className="font-extralight text-lg">{children}</h3>;
};

const MDXComponents = {
  a: CustomLink,
  Image: RoundedImage,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P
};

export default MDXComponents;
