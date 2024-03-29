import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { allBlogs } from '.contentlayer/generated';
import { Blog } from '.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import components from '../../components/MDX';
import { BlogLayout } from '../../layouts/Blog';

interface PostProps {
  post?: Blog;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const Component = useMDXComponent(post?.body.code + '');
  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components
          } as any
        }
      />
    </BlogLayout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<
  PostProps,
  { slug: string }
> = async ({ params }) => {
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
