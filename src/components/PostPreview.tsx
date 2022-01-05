import { Blog } from '.contentlayer/types';
import Link from 'next/link';
import Image from 'next/image';
import { PostTag } from 'src/components/PostTag';

export const PostPreview: React.FC<{ post: Blog }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="hover:scale-[98%] flex items-start justify-between w-full py-2 transition-all">
        <div className="tablet:w-3/4 grid w-full grid-flow-row gap-1">
          <h3 className="mb-2">{post.title}</h3>
          <div className="grid justify-start grid-flow-col gap-2 mb-4">
            {post.tags.split(',').map((tag) => (
              <PostTag key={`${post.title}-${tag}`} tag={tag} />
            ))}
          </div>
          <p className="text-base font-light">
            <span className="italic">Published at:</span> {post.publishedAt}
          </p>
          <p className="text-xl font-light">{post.summary}</p>
        </div>
        <div className="tablet:block hidden w-1/4">
          <Image
            src={post.image}
            alt={post.title}
            width={300}
            height={200}
            objectFit="cover"
            className="w-full h-full rounded-lg"
          />
        </div>
      </a>
    </Link>
  );
};
