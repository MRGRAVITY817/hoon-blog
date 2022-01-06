import { Blog } from '.contentlayer/types';

export const getBlogTags = (posts: Blog[]) => {
  const tags = posts.map((post) => post.tags.split(',')).flat(1);
  const tagSet = new Set(tags);
  return Array.from(tagSet);
};
