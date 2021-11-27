import { useTheme } from 'next-themes';

export const PostTag: React.FC<{ tag: string }> = ({ tag }) => {
  // const bgColor = (tag: string) => {
  //   switch (tag) {
  //     case 'Web':
  //       return 'bg-web';
  //     case 'Blockchain':
  //       return 'bg-blockchain';
  //     case 'Life':
  //       return 'bg-life';
  //     case 'Travel':
  //       return 'bg-travel';
  //     case 'Rust':
  //       return 'bg-rust';
  //     case 'UI/UX':
  //       return 'bg-uiux';
  //   }
  // };

  const { theme } = useTheme();
  return (
    <p
      className={`px-3 py-1 text-sm text-bright dark:border-bright rounded-full border border-dark bg-dark dark:bg-bright dark:text-dark`}
    >
      {tag}
    </p>
  );
};
