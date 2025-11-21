import React, { useContext } from 'react';
import UserContext from './UserContext';

const ChildC = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <p>This is Child C</p>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
};

export default ChildC;