import { Blog } from '.contentlayer/types';

export const getBlogTags = (posts: Blog[]) => {
  const tags = posts.map((post) => post.tags.split(',')).flat(1);
  const tagSet = new Set(tags);
  return Array.from(tagSet);
};

// type CommentArray = { replies: number[]; id: number }[];

// const tree = (high: CommentArray, low: CommentArray) => {
//   high.map(comment => comment.)
// }

// export const traverseCommentTree = (
//   comments: { replies: number[]; id: number }[]
// ) => {
//   const highest = comments.filter((comment) => comment.replies.includes(-1));
//   const lower = comments.filter((comment) => !highest.includes(comment));

//   const threads = highest.map((high) => {
//     const
//     return [high, high.replies.filter(h => h)]
//   });
// };
