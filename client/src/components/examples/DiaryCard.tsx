import DiaryCard from '../DiaryCard';

export default function DiaryCardExample() {
  return (
    <DiaryCard
      id="1"
      date={new Date()}
      title="今天真開心"
      content="今天完成了我的第一個專案，感覺非常有成就感！學到了很多新東西，也遇到了一些挑戰，但最終都克服了。"
      mood="happy"
    />
  );
}
