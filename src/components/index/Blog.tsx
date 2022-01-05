import { allBlogs } from '.contentlayer/data';
import { BlogPreviewCard } from '@components/BlogPreviewCard';
import { getNumericDate } from '@utils/time';

export const IndexBlog = () => {
  const posts = allBlogs;
  return (
    <section>
      <h1 className="mb-8">Recent Blog Posts</h1>
      <div className="overflow-auto">
        <div className="inline-flex flex-row gap-8">
          {posts
            .sort((a, b) => {
              const aDate = new Date(a.publishedAt);
              const bDate = new Date(b.publishedAt);
              return getNumericDate(bDate) - getNumericDate(aDate);
            })
            .slice(0, 8)
            .map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
        </div>
      </div>
    </section>
  );
};
