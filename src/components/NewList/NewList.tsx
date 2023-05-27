import { FC } from 'react';
import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  Typography,
} from '@mui/material';
import { Article } from '../../typedefs';
import { actions } from '../../reducers/articleReducer';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';

interface Props {
  article: Article,
}

export const NewList: FC<Props> = ({ article }) => {
  const articles = useAppSelector(state => state.articles);
  const dispatch = useDispatch();
  
  const handleAdd = (article: Article) => {
    dispatch(actions.add(article));
  }

  const isAdded = (article: Article) => {
    return articles.some(({ title }) => title === article.title)
  };

  return (
    <Card
      sx={{ maxWidth: 300 }}
      className="article"
    >
      <CardContent>
        <Typography 
          sx={{ fontSize: 14 }} 
          color="text.secondary" 
          gutterBottom
        >
          Author: {article.author 
            ? article.author 
            : 'unknown'
          }
        </Typography>

        <Typography 
          sx={{ mb: 1.5 }} 
          color="text.secondary"
        >
          {article.title}
        </Typography>

        <img
          className="article__image"
          src={article.urlToImage} 
          alt="Article" 
        />

        <Typography 
          variant="body2" 
          className="article__description"
        >
          {article.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button 
          size="small"
          variant="contained"
          onClick={() => handleAdd(article)}
        >
          {!isAdded(article) ? 'Add to list' : 'Added' }
        </Button>
      </CardActions>
    </Card>
  );
};
