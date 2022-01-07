import { IndexBlog, IndexIntro, IndexProjects } from '@components/index';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`Hoon's place`}</title>
      </Head>
      <article className="gap-y-20 flex flex-col w-full">
        <IndexIntro />
        <IndexBlog />
        <IndexProjects />
      </article>
    </div>
  );
};

export default Home;
