import { Blog } from '.contentlayer/types';
import { ClockIcon } from '@heroicons/react/outline';

export const BlogLayout: React.FC<{ post?: Blog }> = ({ post, children }) => {
  if (typeof post === 'undefined') {
    return (
      <article>
        <h1>Post not found.</h1>
      </article>
    );
  }
  return (
    <article className="laptop:px-32 flex flex-col items-center justify-start px-12">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="laptop:text-6xl tablet:text-4xl text-3xl font-bold">
            {post.title}
          </h1>
          <div className="tablet:gap-4 flex items-center justify-end gap-2">
            <ClockIcon className="tablet:w-8 w-6" />
            <h3 className="font-extralight laptop:text-2xl tablet:text-xl text-lg">
              {post.readingTime['text']}
            </h3>
          </div>
          <h2 className="laptop:text-2xl tablet:text-xl text-lg font-light">
            {post.summary}
          </h2>
        </div>
      </div>
      <div className="tablet:py-12 dark:prose-invert py-8 prose">
        {children}
      </div>
    </article>
  );
};
