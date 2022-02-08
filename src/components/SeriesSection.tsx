import { Blog } from '.contentlayer/types';
import { getBlogTags } from '@utils/blog';
import { PostTag } from './PostTag';
import Image from 'next/image';
import Link from 'next/link';
import _ from 'lodash';

export const SeriesSection: React.FC<{ posts: Blog[] }> = ({ posts }) => {
  const series = _.uniqBy(
    posts
      .filter((post) => typeof post.series !== 'undefined')
      .map((post) => {
        return { title: post.series, id: post.seriesId };
      }),
    'id'
  );
  return (
    <div className="tablet:grid-cols-3 grid grid-cols-1 gap-4">
      {series.map(({ title, id }) => {
        const tags = getBlogTags(posts.filter((post) => post.series === title));
        return (
          <Link key={title} href={`/blog/series/${id}`}>
            <a className="flex flex-col gap-4 rounded-lg cursor-pointer hover:scale-[97%] transition-transform">
              <div className="relative h-48">
                <Image
                  src={posts.find((post) => post.seriesId === id)?.image ?? ''}
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
