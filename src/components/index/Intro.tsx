import Image from 'next/image';
import Link from 'next/link';

export const IndexIntro = () => {
  return (
    <section className="">
      <h1 className="mb-8">Welcome, wanderer.</h1>
      <div className="tablet:grid-flow-col tablet:gap-8 grid grid-flow-row gap-4">
        <Image
          src="/static/images/profile.jpg"
          alt="profile image"
          height={400}
          width={400}
          objectPosition="center"
          objectFit="cover"
          className="tablet:hidden block col-span-1 rounded-lg"
        />
        <div className="grid grid-flow-row gap-2">
          <div id="whoami">
            <h3 className="mb-1">Who am I?</h3>
            <p className="font-extralight">
              My name is <span className="font-medium underline">Hoon Wee</span>
              , and I am a self-taught software developer.
            </p>
          </div>
          <div id="skillset">
            <h3 className="mb-1">Skillset</h3>
            <div className="inline-grid grid-flow-row grid-cols-2">
              <p className="font-normal">Programming Language</p>
              <p>Typescript, Rust</p>
              <p className="font-normal">Web</p>
              <p>ReactJS, NextJS, NestJS, TailwindCSS</p>
              <p className="font-normal">Blockchain</p>
              <p>Solana</p>
            </div>
          </div>
          <div id="moreaboutme">
            <h3 className="mb-1">More about me</h3>
            <div className="flex gap-4 text-xl">
              <Link href="https://www.linkedin.com/in/%EC%84%B1%ED%9B%88-wee-44959b189/">
                <a className="hover:text-travel hover:underline font-normal">
                  LinkedIn
                </a>
              </Link>
              <p>/</p>
              <Link href="https://twitter.com/coderound817">
                <a className="hover:text-travel hover:underline font-normal">
                  Twitter
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
