import styled from 'styled-components';

export const Card = styled.div`
  width: 30rem;
  min-height: 35rem;
  background-color: #cdeae5;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.43);
  border-radius: 2rem;
`;

export const CardTop = styled.div`
  width: 100%;
  height: 24rem;
  background-color: seagreen;
`;

export const CardBottom = styled.div`
  width: 100%;
  /* min-height: 50%; */

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 2.8rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2rem 2rem 0 0;
`;
