import LifeCard from '../LifeCard';

export default function LifeCardExample() {
  return (
    <LifeCard
      life={{
        id: "1",
        slug: "和朋友一起吃火鍋",
        title: "和朋友一起吃火鍋",
        date: new Date().toISOString().split('T')[0],
        description: "今天和室友們一起去吃火鍋，聊了很多有趣的話題，度過了愉快的一晚。",
        category: "friends",
        content: "今天和室友們一起去吃火鍋，聊了很多有趣的話題，度過了愉快的一晚。"
      }}
    />
  );
}
