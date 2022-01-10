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

  return (
    <a href={href + ''} target="_blank" rel="noopener noreferrer" {...props} />
  );
};

const RoundedImage: React.FC<ImageProps & { comment?: string }> = (props) => {
  return (
    <div className="tablet:mt-12 mt-6">
      <div className={`relative h-96 rounded-lg`}>
        <Image
          alt={props.alt}
          layout="fill"
          sizes="50vw"
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
  return (
    <h1 className="scroll-mt-12 tablet:text-4xl mt-8 mb-4 text-2xl font-semibold">
      {children}
    </h1>
  );
};

const H2: React.FC = ({ children }) => {
  return (
    <h2 className="scroll-mt-12 tablet:text-3xl my-2 text-xl font-medium">
      {children}
    </h2>
  );
};

const H3: React.FC = ({ children }) => {
  return (
    <h3 className="scroll-mt-12 tablet:text-2xl my-1 text-lg font-normal">
      {children}
    </h3>
  );
};

const P: React.FC = ({ children }) => {
  return <p className="my-[2px] font-extralight text-lg">{children}</p>;
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
