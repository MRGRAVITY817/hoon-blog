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
import { BsCheckSquareFill, BsSquareFill } from 'react-icons/bs';

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
            <div className="laptop:flex-row laptop:items-center laptop:gap-0 flex flex-col items-start justify-start gap-4 mb-3">
              <h3 className="mr-8">Skillset</h3>
              <div className="flex items-center justify-start">
                <div
                  onClick={() => setFilter('comfortable')}
                  className="flex items-center justify-start cursor-pointer"
                >
                  {skillLevel === 'comfortable' ? (
                    <BsCheckSquareFill className="w-8" />
                  ) : (
                    <BsSquareFill className="w-8" />
                  )}
                  <p className="tablet:text-lg text-sm">Comfortable</p>
                </div>
                <div
                  onClick={() => setFilter('newbie')}
                  className="opacity-60 flex items-center justify-start gap-1 cursor-pointer"
                >
                  {skillLevel === 'newbie' ? (
                    <BsCheckSquareFill className="w-8" />
                  ) : (
                    <BsSquareFill className="w-8" />
                  )}
                  <p className="tablet:text-lg text-sm">Newbie</p>
                </div>
                <div
                  onClick={() => setFilter('learning')}
                  className="opacity-20 flex items-center justify-start gap-1 cursor-pointer"
                >
                  {skillLevel === 'learning' ? (
                    <BsCheckSquareFill className="w-8" />
                  ) : (
                    <BsSquareFill className="w-8" />
                  )}
                  <p className="tablet:text-lg text-sm">Learning</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row flex-wrap justify-start gap-2">
              {SKILL_SETS.sort((a, b) => {
                const tier = (skillLevel: SkillLevel) => {
                  switch (skillLevel) {
                    case 'comfortable':
                      return 3;
                    case 'newbie':
                      return 2;
                    default:
                      return 1;
                  }
                };
                return tier(b.skillLevel) - tier(a.skillLevel);
              })
                .filter((skillSet) => {
                  switch (skillLevel) {
                    case 'comfortable':
                      return skillSet.skillLevel === 'comfortable';
                    case 'newbie':
                      return skillSet.skillLevel === 'newbie';
                    case 'learning':
                      return skillSet.skillLevel === 'learning';
                    default:
                      return true;
                  }
                })
                .map(({ item, skillLevel }) => (
                  <SkillSetBox
                    key={`${item}-${skillLevel}`}
                    item={item}
                    skillLevel={skillLevel}
                  />
                ))}
            </div>
          </div>
          <div id="more-about-me">
            <h3 className="mb-3">More about me</h3>
            <div className="flex flex-wrap gap-4 text-xl">
              <Link href={LINKEDIN_PROFILE}>
                <a className="hover:underline">LinkedIn</a>
              </Link>
              <p className="font-extralight">•</p>
              <Link href={TWITTER_PROFILE}>
                <a className="hover:underline">Twitter</a>
              </Link>
              <p className="font-extralight">•</p>
              <Link href={IXDF_PROFILE}>
                <a className="hover:underline">IxDF</a>
              </Link>
              <p className="font-extralight">•</p>
              <Link href={GITHUB_PROFILE}>
                <a className="hover:underline">Github</a>
              </Link>
              <p className="font-extralight">•</p>
              <Link href={DEVTO_PROFILE}>
                <a className="hover:underline">Dev.to</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
