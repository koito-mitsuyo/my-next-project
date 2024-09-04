export type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: String;
};

export type Category = {
  name: string;
};
