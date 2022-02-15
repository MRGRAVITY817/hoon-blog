import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Toast } from '@components/Toast';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

export interface MetaProps {
  title: string;
  description: string;
  image: string;
  type: string;
}

export const RootLayout: React.FC<MetaProps> = ({
  title,
  description,
  image,
  type,
  children
}) => {
  const router = useRouter();
  return (
    <div className="bg-bright dark:bg-main text-main dark:text-bright">
      <Head>
        <title>{title}</title>
        <meta name="robot" content="follow, index" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://hoonwee.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://hoonwee.com${router.asPath}`} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={`Hoon Wee`} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hoonweedev" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <div className="laptop:grid-cols-5 tablet:grid-cols-7 tablet:grid">
        <div />
        <div className="laptop:col-span-3 tablet:col-span-5 w-full min-h-screen col-span-7 px-4">
          <Header />
          <Toast />
          <main className="tablet:py-12 min-h-screen py-8">{children}</main>
          <Footer />
        </div>
        <div />
      </div>
    </div>
  );
};
