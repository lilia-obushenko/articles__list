import { FC } from "react";
import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  Typography,
} from "@mui/material";
import { Article } from "../../typedefs";
import './Article.css';

interface Props {
  article: Article,
  pinned: string | null,
  onPin: (value: string) => void,
  onDelete: (value: string) => void,
}

export const ArticleInfo: FC<Props> = (props) => {
  const {
    article,
    pinned,
    onDelete,
    onPin
  } = props;

  return (
    <Card
      key={article.title}
      sx={{ width: 300 }}
      className="article"
    >
      <CardContent>
        <Typography 
          sx={{ fontSize: 14 }} 
          color="text.secondary" 
          gutterBottom
        >
          {article.author}
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
          className="article__description" 
          variant="body2" 
        >
          {article.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button 
          size="small"
          variant="contained" 
          onClick={() => onDelete(article.title)}
        >
          Delete
        </Button>

        <Button 
          size="small"
          variant="contained"
          onClick={() => onPin(article.title)} 
        >
          {pinned === article.title 
            ? 'Pinned' 
            : 'Pin'
          }
        </Button>
      </CardActions>
    </Card>
  );
};
