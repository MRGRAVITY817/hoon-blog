import {
  GITHUB_PROFILE,
  IXDF_PROFILE,
  LINKEDIN_PROFILE,
  TWITTER_PROFILE
} from '@utils/constants';
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
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/static/images/profile.jpg"
        />
        <div className="grid grid-flow-row gap-2">
          <div id="who-am-i">
            <h3 className="mb-3">Who am I?</h3>
            <p>
              My name is <span className="font-medium underline">Hoon Wee</span>
              , and I am a freelance software developer.
            </p>
            <p>
              I write blog posts every week, mostly about techs and user
              experience.
            </p>
          </div>
          <div id="skillset">
            <h3 className="mb-3">Skillset</h3>
            <div className="inline-grid grid-flow-row grid-cols-2">
              <p className="font-normal">Programming Language</p>
              <p>Typescript, Rust</p>
              <p className="font-normal">Web</p>
              <p>ReactJS, NextJS, NestJS, TailwindCSS</p>
              <p className="font-normal">Blockchain</p>
              <p>Solana</p>
            </div>
          </div>
          <div id="more-about-me">
            <h3 className="mb-3">More about me</h3>
            <div className="flex gap-4 text-xl">
              <Link href={LINKEDIN_PROFILE}>
                <a className="hover:text-travel hover:underline">LinkedIn</a>
              </Link>
              <p className="font-extralight">•</p>
              <Link href={TWITTER_PROFILE}>
                <a className="hover:text-travel hover:underline">Twitter</a>
              </Link>
              <p className="font-extralight">•</p>
              <Link href={IXDF_PROFILE}>
                <a className="hover:text-travel hover:underline">IxDF</a>
              </Link>
              <p className="font-extralight">•</p>
              <Link href={GITHUB_PROFILE}>
                <a className="hover:text-travel hover:underline">Github</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
