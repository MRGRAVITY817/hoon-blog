import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getProviders, signIn, useSession } from 'next-auth/react';
import {
  ShieldCheckIcon,
  ShieldExclamationIcon
} from '@heroicons/react/outline';
import { RootLayout } from '@layouts/Root';

const SignIn = ({
  providers
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session, status } = useSession();
  const meta = {
    title: 'Login - Hoon Wee',
    description: 'Login with Google or Github, and leave comments in posts.',
    image: `https://hoonwee.com/static/images/banner/main.png`,
    type: 'website'
  };
  return (
    <RootLayout
      title={meta.title}
      description={meta.description}
      image={meta.image}
      type={meta.type}
    >
      <div className="flex flex-col items-center mt-12">
        {status === 'authenticated' ? (
          <>
            <ShieldCheckIcon className="tablet:w-1/4 w-1/3 mb-8" />
            <h2 className="text-center">Hello, {session?.user?.name}</h2>
          </>
        ) : (
          <>
            <ShieldExclamationIcon className="tablet:w-1/4 w-1/3" />
            <div className="tablet:w-2/3 tablet:gap-8 flex flex-col w-full gap-4 p-12">
              {Object.values(providers as any[]).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="border-main dark:border-bright px-4 py-2 border-2 rounded-lg"
                >
                  <h3>Sign in with {provider.name}</h3>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers }
  };
};

export default SignIn;
