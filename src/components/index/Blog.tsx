import { allBlogs } from 'contentlayer/generated';
import { BlogPreviewCard } from '@components/BlogPreviewCard';

export const IndexBlog = () => {
  const posts = allBlogs;
  return (
    <section>
      <h1 className="mb-8">Recent Blog Posts</h1>
      <div className="hover:overflow-auto overflow-hidden">
        <div className="tablet:gap-12 inline-flex flex-row gap-6">
          {posts
            .sort((a, b) => {
              const aDate = new Date(a.publishedAt);
              const bDate = new Date(b.publishedAt);
              return +bDate - +aDate;
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
