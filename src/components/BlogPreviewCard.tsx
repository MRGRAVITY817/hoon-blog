import { Blog } from '.contentlayer/types';
import Link from 'next/link';
import Image from 'next/image';
import { PostTag } from 'src/components/PostTag';

export const BlogPreviewCard: React.FC<{ post: Blog }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="hover:scale-[97%] flex items-start justify-between laptop:w-72 w-56 transition-all">
        <div className="grid w-full grid-flow-row gap-2">
          <div className="relative w-full h-32">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              sizes="50vw"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3>{post.title}</h3>
          <div className="grid justify-start grid-flow-col gap-2">
            {post.tags.split(',').map((tag) => (
              <PostTag key={`${post.title}-${tag}`} tag={tag} />
            ))}
          </div>
          <p className="text-base font-light">
            <span className="mr-2 italic">Published at:</span>{' '}
            {post.publishedAt}
          </p>
          <p className="text-xl font-light">{post.summary}</p>
        </div>
      </a>
    </Link>
  );
};
