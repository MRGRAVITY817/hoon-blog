import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import { GetStaticProps, NextPage } from 'next';
import { PostPreview } from 'src/components/PostPreview';
import Head from 'next/head';

interface BlogIndexProps {
  posts: Blog[];
}

const BlogIndex: NextPage<BlogIndexProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Hoon Blog</title>
      </Head>
      <h1 className="mb-12">Blog posts</h1>
      <article className="grid grid-flow-row gap-12">
        <section className="grid">
          <h2 className="mb-4">Pinned</h2>
          <PostPreview
            post={
              posts.find((post) => post.title === 'Welcome to Hoons blog!')!
            }
          />
        </section>
        <section>
          <h2 className="mb-4">Recent</h2>
          <div className="grid grid-flow-row gap-4">
            {posts
              .sort((a, b) => {
                const aDate = new Date(a.publishedAt);
                const bDate = new Date(b.publishedAt);
                return bDate.getDate() - aDate.getDate();
              })
              .map((post) => (
                <PostPreview key={post.slug} post={post} />
              ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default BlogIndex;

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  return {
    props: { posts: allBlogs }
  };
};
