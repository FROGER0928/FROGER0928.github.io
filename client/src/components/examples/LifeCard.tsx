import LifeCard from '../LifeCard';

export default function LifeCardExample() {
  return (
    <LifeCard
      id="1"
      date={new Date()}
      title="和朋友一起吃火鍋"
      description="今天和室友們一起去吃火鍋，聊了很多有趣的話題，度過了愉快的一晚。"
      category="friends"
    />
  );
}
