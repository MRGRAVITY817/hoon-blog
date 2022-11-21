import { Blog } from '.contentlayer/generated';
import _ from 'lodash';

export const getBlogTags = (posts: Blog[]) => {
  const tags = posts.map((post) => post.tags.split(',')).flat(1);
  const tagSet = new Set(tags);
  return Array.from(tagSet);
};

export const getSeries = (posts: Blog[]) =>
  _.uniqBy(
    posts
      .filter((post) => typeof post.series !== 'undefined')
      .map((post) => {
        return { title: post.series, id: post.seriesId };
      }),
    'id'
  );
