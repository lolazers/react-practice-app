import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Div = styled.div`
  width: 95%;
  height: 15rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: white;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto auto auto;
  border-radius: 10px;

  & div {
    padding: 1.5rem;
  }

  & div:first-child {
    background: purple;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.5rem;
    font-weight: 600;
  }

  & div:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

const ErrorCard = (props) => {
  return (
    <div>
      <Div>
        <div>
          <p>Invalid Input</p>
        </div>
        <div>
          <p>{props.message}</p>
        </div>
        <div>
          <Button closeError={props.closeError} text="Okay" />
        </div>
      </Div>
    </div>
  );
};

export default ErrorCard;
