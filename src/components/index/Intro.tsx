import Image from 'next/image';
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
        <div className="grid w-full grid-flow-row gap-2 text-xl font-light">
          <p>
            My name is <span className="font-medium">Hoon Wee</span>, and I am a
            freelance Web Developer. <br /> I mainly use Next.js framework with
            Typescript and TailwindCSS.
          </p>
          <p>
            I am also an UX enthusiast, interested in chemistry between users
            and well designed products.
          </p>
          <p>
            And for last but not least, I am a baby Rustacean. I have
            contributed several Rust projects lately so better checkout my
            Github profile.
          </p>
        </div>
      </div>
    </section>
  );
};
