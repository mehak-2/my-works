import React from 'react';
import Card from './Card';

const Frontend = () => {
  return (
    <div className="flex gap">
      <Card
        pname="Personal Portfolio Page"
        desc="HTML CSS JS"
        button={
          <a href="https://github.com/mehak-2/Personal-Portfolio">Github</a>
        }
      />
      <Card
        pname="Todo App"
        desc="HTML CSS JS"
        button={<a href="https://github.com/mehak-2/Todo--react-js">Github</a>}
      />
      <Card
        pname="OTP Screen UI"
        desc="HTML CSS JS"
        button={<a href="https://github.com/mehak-2/OTP-screen-UI">Github</a>}
      />
      <Card
        pname="Race moto Game"
        desc="HTML CSS JS"
        button={<a href="https://github.com/mehak-2/race-moto-game">Github</a>}
      />
      <Card
        pname="Restaurant Website"
        desc="HTML"
        button={
          <a href="https://github.com/mehak-2/restaurant-website">Github</a>
        }
      />
      <Card
        pname="Animated Signup Form"
        desc="HTML CSS JS"
        button={
          <a href="https://github.com/mehak-2/animated-signup-form">Github</a>
        }
      />
      <Card
        pname="My Portfolio"
        desc="HTML CSS JS REACT JS"
        button={<a href="https://github.com">Github</a>}
      />
    </div>
  );
};


export default Frontend;