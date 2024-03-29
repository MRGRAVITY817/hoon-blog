import Link, { LinkProps } from 'next/link';
import Image, { ImageProps } from 'next/image';
import { ReactChild } from 'react';

const CustomLink: React.FC<LinkProps & { children: ReactChild }> = ({
  href,
  ...props
}) => {
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
    <a
      href={href + ''}
      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

const RoundedImage: React.FC<ImageProps & { comment?: string }> = ({
  comment,
  ...props
}) => {
  return (
    <div className="mt-2">
      <div className={`relative`}>
        <Image
          {...props}
          objectFit="cover"
          className="tablet:rounded-lg rounded-md shadow-md"
          placeholder="blur"
          blurDataURL={props.src + ''}
          width={1000}
          alt={props.alt}
        />
      </div>
      <p className="my-2 italic text-center">{comment}</p>
    </div>
  );
};

// headings

const H2: React.FC<{ children: ReactChild }> = ({ children }) => {
  return (
    <h2 className="scroll-mt-12 tablet:text-3xl mt-6 mb-4 text-xl font-medium">
      {children}
    </h2>
  );
};

const H3: React.FC<{ children: ReactChild }> = ({ children }) => {
  return (
    <h3 className="scroll-mt-12 tablet:text-2xl mt-4 mb-2 text-lg font-normal">
      {children}
    </h3>
  );
};

const P: React.FC<{ children: ReactChild }> = ({ children }) => {
  return <p className="my-[2px] leading-8 mb-4">{children}</p>;
};

const MDXComponents = {
  a: CustomLink,
  Image: RoundedImage,
  h2: H2,
  h3: H3,
  p: P
};

export default MDXComponents;
