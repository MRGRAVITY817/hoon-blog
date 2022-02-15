import { RootLayout } from './Root';

export const MainLayout: React.FC = ({ children }) => {
  const meta = {
    title: `Hoon Wee - Developer & UX enthusiast`,
    description: `Freelance Typescript & Rust Developer. I write blog posts every week!`,
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
      {children}
    </RootLayout>
  );
};
