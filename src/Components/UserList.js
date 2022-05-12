import React from 'react';
import styled from 'styled-components';
import User from './User';

const Div = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 2rem;

  & div {
    border: 1px solid #ddd;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const UserList = (props) => {
  const users = props.users.map((user) => {
    return <User key={user.id} name={user.username} age={user.age} />;
  });

  if (users.length > 0) {
    return <Div>{users}</Div>;
  }
};

export default UserList;
