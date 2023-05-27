import { useEffect, useState } from "react";
import './NewArticles.css';
import { Article } from "../../typedefs";
import Spinner from 'react-bootstrap/Spinner';
import { NewList } from "../../components/NewList/NewList";
import { apiUrl } from '../../app/fetching';

export const NewArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getArticles = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl);

      const data = await response.json();

      setArticles(data.articles);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
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

      {isLoading && (
        <div className="spinner">
          <Spinner variant="dark" />
        </div>
      )}

      <div className="articles__container">
        {articles.map(article => (
          <NewList 
            key={article.title}
            article={article} 
          />
        ))}
      </div>

      {isError && !isLoading && (
        <div className="error">
          <h1>Opps..Something went wrong</h1>
        </div>
      )}
    </div>
  )
}
