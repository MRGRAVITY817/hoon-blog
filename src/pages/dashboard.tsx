import Head from 'next/head';

interface DashboardItem {
  title: string;
  subItems: { metric: string; payload: number | string }[];
}

const DashboardItem: React.FC<DashboardItem> = ({ title, subItems }) => {
  const colSpan = `col-span-${subItems.length}`;
  return (
    <div
      className={`${colSpan} p-4 border-2 hover:scale-95 transition-transform`}
    >
      {' '}
      <h2 className="mb-4">{title}</h2>
      <div className={`grid grid-flow-col gap-4`}>
        {subItems.map((item) => (
          <div key={`${item.metric}-${item.payload}`}>
            <h3 className="mb-2">{item.metric}</h3>
            <p className="text-xl font-light">{item.payload}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="grid grid-cols-5 gap-4">
        <DashboardItem
          title="Visitors"
          subItems={[
            { metric: 'Total', payload: 123456 },
            { metric: 'Today', payload: 455 }
          ]}
        />
        <DashboardItem
          title="Post Views"
          subItems={[
            { metric: 'Total', payload: 123456 },
            { metric: 'Today', payload: 123 },
            { metric: 'Highest', payload: 455 }
          ]}
        />
        <DashboardItem
          title="Projects"
          subItems={[
            { metric: 'Total', payload: 56 },
            { metric: 'Main Language', payload: 'Rust' }
          ]}
        />
        <DashboardItem
          title="Title"
          subItems={[
            { metric: 'metric1', payload: 123 },
            { metric: 'metric2', payload: 456 },
            { metric: 'metric3', payload: 789 }
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
