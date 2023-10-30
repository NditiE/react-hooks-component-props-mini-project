import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
  const articles = props.articles.map((article, index) => (
    <Article
      key={index}
      title={article.title}
      date={article.date}
      preview={article.preview}
      minutesToRead={article.minutesToRead}
    />
  ));

  return <main>{articles}</main>;
};

export default ArticleList;
