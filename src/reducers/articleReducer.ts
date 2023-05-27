import { Article } from '../typedefs';

export type AddAction = { type: 'articles/Add', payload: Article };
export type RemoveAction = { type: 'articles/Remove', payload: string };
export type PinAction = { type: 'articles/Pin', payload: string };

type Action = AddAction | RemoveAction | PinAction;

const add = (value: Article): AddAction => ({ type: 'articles/Add', payload: value });
const remove = (value: string): RemoveAction => ({ type: 'articles/Remove', payload: value });
const pin = (value: string): PinAction => ({ type: 'articles/Pin', payload: value });

export const actions = { add, remove, pin };

export const articleReducer = (articles: Article[] = [], action: Action) => {
  switch (action.type) {
    case 'articles/Add':
      if (articles.some(article => article.title === action.payload.title)) {
        return articles;
      }

      return [
        ...articles,
        action.payload,
      ];

    case 'articles/Remove':
      return articles.filter(
        article => article.title !== action.payload,
      );

    case 'articles/Pin':
    const pinnedArticleIndex = articles.findIndex(
      article => article.title === action.payload,
    );

    if (pinnedArticleIndex !== -1) {
      const pinnedArticle = articles.splice(pinnedArticleIndex, 1)[0];

      return [pinnedArticle, ...articles];
    }

    return articles;

    default:
      return articles;
  }
};
