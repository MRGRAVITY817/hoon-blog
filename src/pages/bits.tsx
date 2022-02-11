import Head from 'next/head';
import { BsTools } from 'react-icons/bs';

const BitsAndPieces = () => {
  return (
    <div>
      <Head>
        <title>{`Bits & Pieces - Hoon Wee`}</title>
      </Head>
      <div>
        <h1 className="mb-4">Bits and Pieces</h1>
        <h2 className="mb-6">Small dev tips for busy developers!</h2>
        <h3 className="flex flex-row gap-4 italic">
          Work In Progress{' '}
          <span>
            <BsTools />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default BitsAndPieces;
