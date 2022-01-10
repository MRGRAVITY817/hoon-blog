import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import components from '../../components/MDX';
import { BlogLayout } from '../../layouts/Blog';
import Head from 'next/head';

interface PostProps {
  post?: Blog;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const Component = useMDXComponent(post?.body.code + '');
  return (
    <div>
      <Head>
        <title>{`${post?.title + ''} - Hoon Wee`}</title>
      </Head>

      <BlogLayout post={post}>
        <Component
          components={
            {
              ...components
            } as any
          }
        />
      </BlogLayout>
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<PostProps, { slug: string }> =
  async ({ params }) => {
    const post = allBlogs.find((post) => post.slug === params?.slug);
    return {
      props: {
        post
      }
    };
  };

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
};
