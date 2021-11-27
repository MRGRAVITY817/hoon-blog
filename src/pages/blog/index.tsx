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
      <article>
        <h2 className="mb-4">Pinned Post</h2>
        <div className="grid grid-flow-row gap-4">
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
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
