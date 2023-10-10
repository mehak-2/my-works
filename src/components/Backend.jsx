import React from 'react'
import Card from './Card'

const Backend = () => {
  return (
    <div className="flex gap">
      <Card
        pname="Chat App"
        desc="React With Firebase"
        button={<a href="https://github.com">Github</a>}
      />
      <Card
        pname="Library Management System"
        desc="Java Mysql"
        button={<a href="https://github.com">Github</a>}
      />
      <Card
        pname="Student Management System"
        desc="Java Mysql"
        button={<a href="https://github.com">Github</a>}
      />
      <Card
        pname="Ebill System"
        desc="Java Mysql"
        button={<a href="https://github.com">Github</a>}
      />
    </div>
  );
};

export default Backend;