export const PostTag: React.FC<{ tag: string }> = ({ tag }) => {
  const color =
    'text-bright dark:border-bright border-main bg-main dark:bg-bright dark:text-main';
  const pinnedColor = `bg-orange-500 dark:text-main text-bright border-orange-500`;
  return (
    <p
      className={`px-3 py-1 font-normal text-sm rounded-full border ${
        tag === 'Pinned' ? pinnedColor : color
      }`}
    >
      {tag}
    </p>
  );
};
