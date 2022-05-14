import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import './App.css';

import InputForm from './Components/InputForm';
import UserList from './Components/UserList';

const ParentDiv = styled.div`
  width: 95%;
  margin: 2rem auto;
`;

const App = () => {
  const [userData, setUserData] = useState([]);
  const userInputHandler = (userData) => {
    setUserData((prevUsers) => {
      return [...prevUsers, userData];
    });
  };

  return (
    <ParentDiv>
      <InputForm onUserInput={userInputHandler} />
      <UserList users={userData} />
    </ParentDiv>
  );
};

export default App;
