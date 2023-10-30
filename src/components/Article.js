import React from 'react';

const Article = (props) => {
  const { title, date, preview, minutesToRead } = props;

  // Calculate the number of emojis needed for 'Minutes to Read'
  const emojis = [];
  const emojiType = minutesToRead <= 30 ? '☕️' : '🍱';
  const numberOfEmojis = Math.ceil(minutesToRead / (emojiType === '☕️' ? 5 : 10));
  for (let i = 0; i < numberOfEmojis; i++) {
    emojis.push(emojiType);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || 'January 1, 1970'}</small>
      <p>{preview}</p>
      <div>{emojis.join(' ')} {minutesToRead} min read</div>
    </article>
  );
};

export default Article;
