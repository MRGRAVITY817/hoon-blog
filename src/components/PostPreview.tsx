import { Blog } from '.contentlayer/types';
import Link from 'next/link';
import Image from 'next/image';
import { PostTag } from 'src/components/PostTag';

export const PostPreview: React.FC<{ post: Blog }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="hover:shadow-md w-full px-4 py-2 transition-shadow rounded-md shadow-none">
        <div className="flex items-start justify-between py-2">
          <div className="grid grid-flow-row gap-1">
            <h3>{post.title}</h3>
            <div className="grid justify-start grid-flow-col gap-2">
              {post.tags.split(',').map((tag) => (
                <PostTag key={`${post.title}-${tag}`} tag={tag} />
              ))}
            </div>
            <p className="text-base font-light">
              <span className="italic">Published at:</span> {post.publishedAt}
            </p>
            <p className="text-xl font-light">{post.summary}</p>
          </div>
          <Image
            src={post.image}
            alt={post.title}
            width={200}
            height={150}
            objectFit="cover"
            className="h-full rounded-lg"
          />
        </div>
      </a>
    </Link>
  );
};
