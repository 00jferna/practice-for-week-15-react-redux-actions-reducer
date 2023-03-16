import articles from "../data/data";

const LOAD_ARTICLES = "article/loadArticles";

const initialState = {
  entries: [],
  isLoading: true
};

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default articleReducer;
