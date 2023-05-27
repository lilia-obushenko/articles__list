import { ChangeEvent, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { actions } from '../../reducers/articleReducer';
import { ArticleInfo } from '../Article/Article';
import { filterArticles } from '../../app/helpers';
import './ArticleList.css';

export const ArticleList = () => {
  const [query, setQuery] = useState('');
  const [pinnedArticle, setPinnedArticle] = useState<string | null>(null);

  const articles = useAppSelector(state => state.articles);
  const dispatch = useDispatch();

  const handleRemove = (article: string) => {
    dispatch(actions.remove(article));
  };

  const handlePin = (article: string) => {
    setPinnedArticle(article);
    dispatch(actions.pin(article));
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
   setQuery(e.target.value);
  };

  const filteredArticles = useMemo(() => (
    filterArticles(articles, query)
  ), [query, articles]);

  return (
    <div>
      <TextField
        className="articles__search"
        value={query}
        label="Look for article" 
        variant="standard"
        onChange={handleSearch}
      />

      <div className="articles__container">
        {filteredArticles.map(article => (
          <ArticleInfo
            key={article.title}
            pinned={pinnedArticle}
            article={article} 
            onDelete={handleRemove} 
            onPin={handlePin} 
          />
        ))}
      </div>
    </div>
  );
};

