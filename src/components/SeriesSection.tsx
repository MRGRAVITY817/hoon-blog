import { Blog } from '.contentlayer/types';
import { getBlogTags } from '@utils/blog';
import { PostTag } from './PostTag';
import Image from 'next/image';
import Link from 'next/link';

export const SeriesSection: React.FC<{ posts: Blog[] }> = ({ posts }) => {
  const series = Array.from(
    new Set(
      posts
        .filter((post) => typeof post.series !== 'undefined')
        .map((post) => post.series)
    )
  );
  return (
    <div className="tablet:grid-cols-3 grid grid-cols-1 gap-4">
      {series.map((title) => {
        const tags = getBlogTags(posts.filter((post) => post.series === title));
        return (
          <Link key={title ?? ''} href="#">
            <a className="flex flex-col gap-4 rounded-lg cursor-pointer">
              <div className="relative h-48">
                <Image
                  src={posts.find((post) => post.series === title)?.image ?? ''}
                  alt="Fill"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="">{title}</h3>
              <div className="grid justify-start grid-flow-col gap-2 mb-4">
                {tags.map((tag) => (
                  <PostTag key={`${title}-${tag}`} tag={tag} />
                ))}
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
