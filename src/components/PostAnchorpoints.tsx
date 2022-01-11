export interface AnchorPoint {
  title: string;
  level: string;
  titleId: number;
}

export const PostAnchorpoints: React.FC<{
  points: AnchorPoint[];
  title: string;
}> = ({ points, title }) => {
  return (
    <div className="">
      <p
        onClick={() => window.scrollTo(0, 0)}
        className="opacity-70 hover:opacity-100 text-xl font-normal transition-opacity cursor-pointer"
      >
        {title}
      </p>
      {points.map((point, index) => (
        <PostAnchorpoint key={point.title + index.toString()} point={point} />
      ))}
    </div>
  );
};

const PostAnchorpoint: React.FC<{ point: AnchorPoint }> = ({ point }) => {
  const padding = (nodeName: string) => {
    switch (nodeName) {
      case 'H1':
        return `pl-0 text-xl mt-3`;
      case 'H2':
        return `pl-4 text-lg mt-2`;
      default:
        return `pl-6 text-base leading-5 mt-1`;
    }
  };

  return (
    <p
      onClick={() =>
        document.getElementById(`title-${point.titleId}`)?.scrollIntoView()
      }
      className={`cursor-pointer opacity-70 hover:opacity-100 font-extralight transition-opacity ${padding(
        point.level
      )}`}
    >
      {point.title}
    </p>
  );
};
