export const PostTag: React.FC<{ tag: string; invert?: boolean }> = ({
  tag,
  invert = false
}) => {
  const color = invert
    ? 'text-dark dark:border-dark border-bright bg-bright dark:bg-dark dark:text-bright'
    : 'text-bright dark:border-bright border-dark bg-dark dark:bg-bright dark:text-dark';
  return (
    <p className={`px-3 py-1 font-normal text-sm rounded-full border ${color}`}>
      {tag}
    </p>
  );
};
