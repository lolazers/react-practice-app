import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  width: 100%;
  background: purple;
  padding: 0.4rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Button = (props) => {
  return <Btn onClick={props.closeError}>{props.text}</Btn>;
};

export default Button;
