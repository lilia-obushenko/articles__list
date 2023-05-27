import { Article } from "../typedefs";

export const filterArticles = (items: Article[], query: string) => {
  const lowerQuery = query.toLowerCase();

  return items.filter(
    item => item.title.toLowerCase().includes(lowerQuery) 
    || item.description.toLowerCase().includes(lowerQuery) 
  );
};