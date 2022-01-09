import { Blog } from '.contentlayer/types';
import { PostTag } from './PostTag';

export const PostTagList: React.FC<{ post: Blog }> = ({ post }) => {
  return (
    <div className="grid justify-start grid-flow-col gap-2 mb-4">
      {post.tags.split(',').map((tag) => (
        <PostTag key={`${post.title}-${tag}`} tag={tag} />
      ))}
    </div>
  );
};
