import { Blog } from '.contentlayer/types';
import { PostInfo } from '@components/PostInfo';

export const BlogLayout: React.FC<{ post?: Blog }> = ({ post, children }) => {
  if (typeof post === 'undefined') {
    return (
      <article>
        <h1>Post not found.</h1>
      </article>
    );
  }
  return (
    <article className="desktop:px-56 laptop:px-28 tablet:px-20 tablet:my-12 flex flex-col items-center justify-start px-4 my-4">
      <div className="flex flex-col items-start justify-center w-full">
        <h1 className="laptop:text-6xl tablet:text-4xl mb-8 text-3xl font-bold">
          {post.title}
        </h1>
        <PostInfo post={post} />
        <h3 className="tablet:mt-8 mt-4 font-light">{post.summary}</h3>
      </div>
      <div className="dark:prose-invert w-full prose">{children}</div>
    </article>
  );
};
