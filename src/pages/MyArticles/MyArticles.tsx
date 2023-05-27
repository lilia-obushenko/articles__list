import { ArticleForm } from "../../components/ArticleForm/ArticleForm";
import { ArticleList } from "../../components/ArticleList/ArticleList";

export const MyArticles = () => {
  return (
    <>
      <ArticleForm />
      
      <h1 className="title">
        My Articles
      </h1>

      <ArticleList/>
    </>
  );
};
