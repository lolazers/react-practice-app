import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background: purple;
  padding: 0.4rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
`;

const Button = (props) => {
  return <Btn>{props.text}</Btn>;
};

export default Button;
