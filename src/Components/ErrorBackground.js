import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

const ErrorBackground = (props) => {
  return <Div onClick={props.closeError}></Div>;
};

export default ErrorBackground;
