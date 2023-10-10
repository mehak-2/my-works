import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.pname}</h1>
      <h3>{props.desc}</h3>
      <button className='git-btn'>{props.button}</button>
      </div>
  );
};

export default Card
