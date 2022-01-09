export const PostTag: React.FC<{ tag: string }> = ({ tag }) => {
  const color =
    'text-bright dark:border-bright border-main bg-main dark:bg-bright dark:text-main';
  const pinnedColor = `dark:bg-orange-500 dark:text-transparent dark:border-main border-orange-500 text-orange-500 bg-transparent`;
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
