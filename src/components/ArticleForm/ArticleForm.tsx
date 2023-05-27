import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Article } from '../../typedefs';
import { Button, TextField } from '@mui/material';
import './ArticleForm.css';
import { actions } from '../../reducers/articleReducer';

export const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  
  const addArticle = (article: Article) => {
    dispatch(actions.add(article));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addArticle({ 
      title, 
      description, 
      urlToImage: image, 
      author, 
    });

    setTitle('');
    setImage('');
    setDescription('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="form"
    >
      <TextField
        value={author}
        label="Author"
        onChange={e => setAuthor(e.target.value)}
      />

      <TextField
        value={title}
        label="Title"
        onChange={e => setTitle(e.target.value)}
      />

      <TextField 
        value={image}
        label="Image"
        onChange={e => setImage(e.target.value)}
      />

      <TextField
        value={description}
        label="Description"
        onChange={e => setDescription(e.target.value)}
      />

      <Button
        className="form__button"
        type="submit"
        variant="contained" 
      >
        Add article
      </Button>
    </form>
  );
};

