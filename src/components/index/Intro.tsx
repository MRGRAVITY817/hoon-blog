import { SkillLevel, SkillSetBox } from '@components/SkillSetBox';
import {
  DEVTO_PROFILE,
  GITHUB_PROFILE,
  IXDF_PROFILE,
  LINKEDIN_PROFILE,
  SKILL_SETS,
  TWITTER_PROFILE
} from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const IndexIntro = () => {
  const [skillLevel, setSkillLevel] = useState<SkillLevel | null>(null);
  const setFilter = (input: SkillLevel) => {
    if (input === skillLevel) {
      setSkillLevel(null);
    } else {
      setSkillLevel(input);
    }
  };

  return (
    <section className="">
      <h1 className="mb-8">Welcome, wanderer.</h1>
      <div className="laptop:gap-8 laptop:grid-cols-2 grid grid-cols-1 gap-4">
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
        <div className="grid grid-flow-row gap-6">
          <div id="who-am-i">
            <h2 className="mb-3">Who am I?</h2>
            <p className="laptop:text-2xl font-extralight text-xl">
              My name is <span className="font-medium underline">Hoon Wee</span>
              , and I am a freelance software developer.
            </p>
            <p className="laptop:text-2xl font-extralight mt-4 text-xl">
              I write blog posts every week, mostly about techs and user
              experience.
            </p>
          </div>
          <div id="more-about-me">
            <h2 className="mb-3">More about me</h2>
            <div className="gap-y-2 grid grid-cols-3 text-xl">
              <Link href={LINKEDIN_PROFILE}>
                <a className="hover:underline font-extralight laptop:text-2xl text-xl">
                  LinkedIn
                </a>
              </Link>
              <Link href={TWITTER_PROFILE}>
                <a className="hover:underline font-extralight laptop:text-2xl text-xl">
                  Twitter
                </a>
              </Link>
              <Link href={IXDF_PROFILE}>
                <a className="hover:underline font-extralight laptop:text-2xl text-xl">
                  IxDF
                </a>
              </Link>
              <Link href={GITHUB_PROFILE}>
                <a className="hover:underline font-extralight laptop:text-2xl text-xl">
                  Github
                </a>
              </Link>
              <Link href={DEVTO_PROFILE}>
                <a className="hover:underline font-extralight laptop:text-2xl text-xl">
                  Dev.to
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
