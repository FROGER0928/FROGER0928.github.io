import WorkCard from '../WorkCard';

export default function WorkCardExample() {
  return (
    <WorkCard
      id="1"
      title="我的第一個網站"
      description="使用 React 和 Tailwind CSS 建立的個人作品集網站，展示了我的設計和開發能力。"
      tags={["React", "Tailwind", "設計"]}
    />
  );
}
