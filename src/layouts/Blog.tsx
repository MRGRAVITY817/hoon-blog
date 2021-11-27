import { Blog } from '.contentlayer/types';

export const BlogLayout: React.FC<{ post?: Blog }> = ({ post, children }) => {
  if (typeof post === 'undefined') {
    return (
      <article>
        <h1 className="text-4xl">Post not found.</h1>
      </article>
    );
  }
  return (
    <article className="">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="laptop:text-6xl tablet:text-4xl mb-4 text-3xl font-bold">
            {post.title}
          </h1>
          <h2 className="laptop:text-2xl tablet:text-xl text-lg font-light">
            {post.summary}
          </h2>
        </div>
        <h3 className="font-extralight laptop:text-2xl tablet:text-xl text-lg">
          {post.readingTime['text']}
        </h3>
      </div>
      <div className="tablet:py-12 py-8 prose">{children}</div>
    </article>
  );
};
