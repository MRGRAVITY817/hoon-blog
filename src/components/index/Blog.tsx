import { allBlogs } from '.contentlayer/data';
import { BlogPreviewCard } from '@components/BlogPreviewCard';

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
              return bDate.getDate() - aDate.getDate();
            })
            .slice(0, 3)
            .map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
        </div>
      </div>
    </section>
  );
};
