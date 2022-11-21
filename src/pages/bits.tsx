import { RootLayout } from '@layouts/Root';
import { BsTools } from 'react-icons/bs';

const BitsAndPieces = () => {
  const meta = {
    title: 'Bits and Pieces - Hoon Wee',
    description: 'Small dev tips for busy developers :)',
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
      <>
        <h1 className="mb-4">Bits and Pieces</h1>
        <h2 className="mb-6">Small dev tips for busy developers!</h2>
        <h3 className="flex flex-row gap-4 italic">
          Work In Progress{' '}
          <span>
            <BsTools />
          </span>
        </h3>
      </>
    </RootLayout>
  );
};

export default BitsAndPieces;
