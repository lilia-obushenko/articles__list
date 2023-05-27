import { useEffect, useState } from "react";
import { Article } from "../../typedefs";
import { NewList } from "../../components/NewList/NewList";
import { apiUrl } from '../../app/fetching';

export const NewArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = async () => {
    try {
      const response = await fetch(apiUrl);

      const data = await response.json();

      setArticles(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <h1 className="title">
        New articles
      </h1>

        <div className="articles__container">
          {articles.map(article => (
            <NewList 
              key={article.title}
              article={article} 
            />
          ))}
        </div>
    </div>
  )
}
