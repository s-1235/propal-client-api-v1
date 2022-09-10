import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 2rem;
  background-color: #cdeae5;

  width: 32rem;
  min-height: 45rem;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.43);
`;

export const ImageBox = styled.div`
  display: block;
  width: 100%;
  height: 20rem;
  background-color: black;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2rem 2rem 0 0;
`;

export const ContentBox = styled.div`
  padding: 2rem 3rem;

  & > * {
    margin-bottom: 1.5rem;
  }
`;
