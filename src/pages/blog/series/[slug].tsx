import { allBlogs } from '.contentlayer/generated';
import { Blog } from '.contentlayer/generated';
import { PostPreview } from '@components/PostPreview';
import { RootLayout } from '@layouts/Root';
import { getBlogTags, getSeries } from '@utils/blog';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

interface SeriesProps {
  series: string;
  posts: Blog[];
}

const Series: NextPage<SeriesProps> = ({ series, posts }) => {
  const seriesImage =
    posts[0].image ?? `https://hoonwee.com/static/images/banner/main.png`;
  const seriesDescription = posts[0].summary ?? 'Series Summary';
  const meta = {
    title: `Series - ${series}`,
    description: posts[0].summary ?? 'Series Summary',
    image: seriesImage,
    type: 'website'
  };
  return (
    <RootLayout
      title={meta.title}
      description={meta.description}
      image={meta.image}
      type={meta.type}
    >
      <div>
        <h1 id="series-title">{series}</h1>
        <div id="series-banner" className="h-96 relative w-full my-8">
          <Image
            src={seriesImage}
            alt={seriesDescription}
            layout="fill"
            objectFit="contain"
            className="dark:bg-bright bg-main rounded-lg"
          />
        </div>
        <div id="series-description" className="mb-12">
          <h2 className="mb-4">What will we learn?</h2>
          <p className="text-extralight text-2xl">{seriesDescription}</p>
        </div>
        <div id="total-info" className="mb-12">
          <h2 className="mb-4">Totals</h2>
          <div className="justify-left tablet:grid-flow-col grid items-center grid-flow-row gap-2 my-4">
            <TotalMetricItem label="Posts Uploaded" total={posts.length} />
            <TotalMetricItem
              label="Minutes to Read"
              total={posts
                .map(({ readingTime }) => parseInt(readingTime['text']))
                .reduce((sum, curr) => sum + curr)}
            />
            <TotalMetricItem
              label="Tags"
              total={getBlogTags(posts).join(', ')}
            />
          </div>
        </div>
        <div>
          <h2 className="mb-4">Posts</h2>
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <PostPreview key={post.postId} post={post} />
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
};
export default Series;
export const getStaticProps: GetStaticProps<
  SeriesProps,
  { slug: string }
> = async ({ params }) => {
  const series =
    allBlogs.find((post) => post.seriesId + '' === params?.slug)?.series ?? '';
  const posts = allBlogs.filter((post) => post.seriesId + '' === params?.slug);
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
const TotalMetricItem: React.FC<{ label: string; total: string | number }> = ({
  label,
  total
}) => (
  <div className="border-main dark:border-bright h-full p-4 border-2 rounded-lg">
    <p className="text-xl font-medium text-center">{label}</p>
    <div className="border-main dark:border-bright h-0 my-4 border" />
    <p className="text-xl font-light text-center">{total}</p>
  </div>
);
