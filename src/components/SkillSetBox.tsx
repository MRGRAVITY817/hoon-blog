export type SkillLevel = 'comfortable' | 'newbie' | 'learning';

export interface SkillSetProps {
  item: string;
  skillLevel: SkillLevel;
}

export const SkillSetBox: React.FC<SkillSetProps> = ({ item, skillLevel }) => {
  const opacity = (skillLevel: SkillLevel) => {
    switch (skillLevel) {
      case 'comfortable':
        return 'opacity-100';
      case 'newbie':
        return 'opacity-60';
      default:
        return 'opacity-20';
    }
  };
  return (
    <div
      className={`py-1 px-2 border border-main dark:border-bright rounded-full ${opacity(
        skillLevel
      )} `}
    >
      <p className={`font-normal text-sm`}>{item}</p>
    </div>
  );
};
