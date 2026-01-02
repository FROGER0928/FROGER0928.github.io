export interface Work {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  content: string;
}

export interface Diary {
  id: string;
  title: string;
  slug: string;
  date: string;
  mood?: "happy" | "good" | "neutral" | "sad";
  excerpt: string;
  content: string;
}

export interface Life {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: "study" | "friends" | "food" | "travel" | "hobbies";
  description: string;
  content: string;
}

export interface Photo {
  id: string;
  url: string;
  caption?: string;
}

