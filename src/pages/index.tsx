import { IndexBlog, IndexIntro, IndexProjects } from '@components/index';
import { MainLayout } from '@layouts/Main';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <article className="gap-y-20 laptop:mb-20 tablet:mb-12 flex flex-col w-full mb-8">
        <IndexIntro />
        <IndexBlog />
      </article>
    </MainLayout>
  );
};

export default Home;
