import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ErrorCard from './ErrorCard';

const Div = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
`;
const Form = styled.form`
  & div {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.4rem;
  }

  & label {
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  & input {
    font-size: 1rem;
    border: 1px solid #ddd;
    padding: 0.2rem;
    outline: none;
  }

  & input:focus {
    border-color: purple;
  }
`;
const InputForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameHandler = (e) => setUsername(e.target.value);
  const ageHandler = (e) => setAge(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      id: Math.random(),
      username: username,
      age: age,
    };
    props.onUserInput(userData);
    setUsername('');
    setAge('');
  };

  return (
    <Div>
      <Form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input value={username} onChange={usernameHandler} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" value={age} onChange={ageHandler} />
        </div>
        <Button text="Add User" />
      </Form>
      <ErrorCard />
    </Div>
  );
};

export default InputForm;
