import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`Hoon's place`}</title>
      </Head>
      <article className="flex flex-col w-full">
        <section className="">
          <h1 className="mb-8">Welcome!</h1>
          <div className="tablet:grid-flow-col grid grid-flow-row gap-4">
            <Image
              src="/static/images/profile.jpg"
              alt="profile image"
              height={400}
              width={400}
              objectPosition="center"
              objectFit="cover"
              className="tablet:hidden block col-span-1 rounded-lg"
            />
            <div className="text-light grid w-full grid-flow-row gap-2 text-xl">
              <p>
                My name is <strong>Hoon Wee</strong>, and I am a freelance Web
                Developer. <br /> I mainly use Next.js framework with Typescript
                and TailwindCSS.
              </p>
              <p>
                I am also an UX enthusiast, interested in chemistry between
                users and well designed products.
              </p>
              <p>
                And for last but not least, I am a baby Rustacean. I have
                contributed several Rust projects lately so better checkout my
                Github profile.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Home;
