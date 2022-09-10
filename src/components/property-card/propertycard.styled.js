import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 16rem;
  width: 90rem;
  background-color: #cdeae5;
  border-radius: 20px;
  /* margin: 2rem; */
  /* padding: 1rem; */
  border: 1px solid rgba(0, 0, 0, 0.1);

  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.43);
  /* position: relative; */
`;

export const Img = styled.img`
  width: 70%;
  display: block;
  background: pink;
  border-radius: 20px 0 0 20px;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 1rem 2rem;
  color: #f1faee;
  position: relative;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
  /* align-items: center; */
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  line-height: 1.7;
  color: #1d3557;

  margin-top: 3.5rem;
`;
export const SubTitle = styled.h3`
  font-size: 1.6rem;
  letter-spacing: 0.3rem;
  line-height: 1.7;
  color: #457b9d;
  margin-top: -1rem;
`;
export const Description = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
  /* letter-spacing: 0.2rem; */
  line-height: 1.7;
  font-weight: 400;
  color: #1d3557;
`;

export const Bar = styled.div`
  color: #1d3557;
  display: flex;
  /* width: 20rem; */
  top: 0.8rem;
  right: 0.35rem;
  flex-direction: row;
  position: absolute;

  > * {
    &:last-child {
      border: none;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  padding: 0 0.5rem;
  font-weight: 700;

  /* width: 20rem; */
  margin-right: 0.6rem;
  border-right: 2px solid #1d3557;
  top: 0;
  /* right: 0; */

  & p {
    font-weight: 500;
  }
`;
