import { Navigate, Route, Routes } from 'react-router';
import { MyArticles } from '../../pages/MyArticles/MyArticles';
import { NewArticles } from '../../pages/NewArticles/NewArticles';

export const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path='/' element={ <Navigate to='/myArticles' />} />
        <Route path='/myArticles' element={ <MyArticles />} />
        <Route path='/newArticles' element={ <NewArticles />} />
      </Routes>
    </div>
  );
};
