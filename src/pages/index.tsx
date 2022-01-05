import { IndexBlog, IndexIntro } from '@components/index';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`Hoon's place`}</title>
      </Head>
      <article className="flex flex-col w-full gap-12">
        <IndexIntro />
        <IndexBlog />
      </article>
    </div>
  );
};

export default Home;
