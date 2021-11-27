import { useTheme } from 'next-themes';

export const PostTag: React.FC<{ tag: string }> = ({ tag }) => {
  const bgColor = (tag: string) => {
    switch (tag) {
      case 'Web':
        return 'bg-web';
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

  const { theme } = useTheme();
  return (
    <button
      className={`px-3 py-1 text-sm text-bright rounded-full max-w-[80px] ${
        theme === 'dark' ? 'border-bright border' : bgColor(tag)
      } `}
    >
      {tag}
    </button>
  );
};
