export const PostTag: React.FC<{ tag: string; invert?: boolean }> = ({
  tag,
  invert = false
}) => {
  const color = invert
    ? 'text-main dark:border-main border-bright bg-bright dark:bg-main dark:text-bright'
    : 'text-bright dark:border-bright border-main bg-main dark:bg-bright dark:text-main';
  return (
    <p className={`px-3 py-1 font-normal text-sm rounded-full border ${color}`}>
      {tag}
    </p>
  );
};
