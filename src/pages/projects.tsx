import { RootLayout } from '@layouts/Root';

const Projects = () => {
  const meta = {
    title: 'Projects - Hoon Wee',
    description: 'My Dev and UX projects and case studies',
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
      <div>
        <h1>Work In Progress :)</h1>
      </div>
    </RootLayout>
  );
};

export default Projects;
