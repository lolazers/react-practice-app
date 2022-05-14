import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ErrorCard from './ErrorCard';
import ErrorBackground from './ErrorBackground';

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
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const usernameHandler = (e) => setUsername(e.target.value);
  const ageHandler = (e) => setAge(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (username === '' || age === '') {
      setErrorMessage('Please enter a valid name and age (non-empty values).');
      return setIsError(true);
    }

    if (parseInt(age) < 0) {
      setErrorMessage('Please enter a valid age (>0).');
      return setIsError(true);
    }

    const userData = {
      id: Math.random(),
      username: username,
      age: age,
    };
    props.onUserInput(userData);
    setUsername('');
    setAge('');
  };

  const closeErrorHandler = () => {
    setErrorMessage('');
    setIsError(false);
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
      {isError && <ErrorBackground closeError={closeErrorHandler} />}
      {isError && (
        <ErrorCard closeError={closeErrorHandler} message={errorMessage} />
      )}
    </Div>
  );
};

export default InputForm;
