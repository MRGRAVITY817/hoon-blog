export const PostTag: React.FC<{ tag: string }> = ({ tag }) => {
  const bgColor = (tag: string) => {
    switch (tag) {
      case 'Web Dev':
        return 'bg-webdev';
      case 'Blockchain':
        return 'bg-blockchain';
      case 'Life':
        return 'bg-life';
      case 'Travel':
        return 'bg-travel';
      case 'Rust':
        return 'bg-rust';
      case 'UI/UX':
        return 'bg-uiux';
    }
  };
  return (
    <button
      className={`px-3 py-1 text-sm text-bright rounded-full max-w-[80px] ${bgColor(
        tag
      )}`}
    >
      {tag}
    </button>
  );
};
