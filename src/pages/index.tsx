import { IndexBlog, IndexIntro, IndexProjects } from '@components/index';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`Hoon Wee`}</title>
      </Head>
      <article className="gap-y-20 laptop:mb-20 tablet:mb-12 flex flex-col w-full mb-8">
        <IndexIntro />
        <IndexBlog />
        {/* <IndexProjects /> */}
      </article>
    </div>
  );
};

export default Home;
