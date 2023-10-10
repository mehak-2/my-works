import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.pname}</h1>
      <h3>{props.desc}</h3>
      <h4>{props.button}</h4>
      </div>
  );
};

export default Card
