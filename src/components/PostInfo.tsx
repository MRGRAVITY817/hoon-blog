import { Blog } from '.contentlayer/types';
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline';
import { getPrettyFullDate } from '@utils/time';

export const PostInfo: React.FC<{ post: Blog }> = ({ post }) => {
  return (
    <div className="flex items-center justify-start gap-2 mb-2">
      <CalendarIcon className="w-6" />
      <p>{getPrettyFullDate(new Date(post.publishedAt))}</p>
      <p>&bull;</p>
      <ClockIcon className="w-6" />
      <p>{post.readingTime['text']}</p>
    </div>
  );
};
