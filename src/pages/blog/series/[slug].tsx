import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import { PostPreview } from '@components/PostPreview';
import { getSeries } from '@utils/blog';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

interface SeriesProps {
  series: string;
  posts: Blog[];
}

const Series: NextPage<SeriesProps> = ({ series, posts }) => {
  return (
    <div>
      <Head>
        <title>{`${series} - Hoon Wee`}</title>
      </Head>
      <div>
        <h1 className="mb-12">{series}</h1>
        <div className="flex flex-col gap-2">
          {posts.map((post) => (
            <PostPreview key={post.postId} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;

export const getStaticProps: GetStaticProps<SeriesProps, { slug: string }> =
  async ({ params }) => {
    const series =
      allBlogs.find((post) => post.seriesId + '' === params?.slug)?.series ??
      '';
    const posts = allBlogs.filter(
      (post) => post.seriesId + '' === params?.slug
    );
    return {
      props: {
        series,
        posts
      }
    };
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const series = getSeries(allBlogs).map(({ id }) => id + '');
  return {
    paths: series.map((p) => ({ params: { slug: p ?? '' } })),
    fallback: false
  };
};
