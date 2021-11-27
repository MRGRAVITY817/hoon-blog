import Head from 'next/head';
import { BsTools } from 'react-icons/bs';

const Course = () => {
  return (
    <div>
      <Head>
        <title>Courses</title>
      </Head>
      <div>
        <div className="flex">
          <h1>Dev course coming soon</h1>
          <h1 className="ml-8">
            <BsTools />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Course;
