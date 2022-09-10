import styled from 'styled-components';
import bg from './../../../assets/img/hero_bg.jpg';

export const HeroContainer = styled.div`
  background-image: url(${bg});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const HeroCenter = styled.div`
  color: white;
  position: relative;
  z-index: 1;
`;

export const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.4;
`;
