import { Blog } from '.contentlayer/types';
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline';
import { getPrettyFullDate } from '@utils/time';

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
      <div className="flex flex-col w-full">
        <h1 className="laptop:text-6xl tablet:text-4xl mb-8 text-3xl font-bold">
          {post.title}
        </h1>
        <div className="flex items-center justify-start gap-2 mb-2">
          <CalendarIcon className="w-6" />
          <p>{getPrettyFullDate(new Date(post.publishedAt))}</p>
          <p>&bull;</p>
          <ClockIcon className="w-6" />
          <p className="text-lg">{post.readingTime['text']}</p>
        </div>
        <h2 className="laptop:text-2xl tablet:text-xl text-lg font-light">
          {post.summary}
        </h2>
      </div>
      <div className="tablet:py-12 dark:prose-invert py-8 prose">
        {children}
      </div>
    </article>
  );
};
