import styled from "styled-components";
export const Container = styled.div`
  ${(props) =>
    props.buttonsContainer &&
    `display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: relative;`}
  ${(props) =>
    props.megabarContainer &&
    `top: 492px;
    left: 350px;
    width: 1108px;
    height: 132px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    `}
    ${(props) =>
    props.dropdownsContainer &&
    `z-index: 100;
    display: flex;
    justify-content: space-evenly;
    `}
`;
export const Input = styled.input.attrs((props) => ({
  type: props.type,
  placeholder: props.placeholder,
}))`
  & {
    display: flex;
    outline: none;
    flex: 0 0 25%;
    padding: 1px;
    border: none;
  }
  &::placeholder {
    display: flex;
    color: black;
    font-size: 40px;
    font-family: "Baloo 2", cursive;
    text-align: center;
    justify-content: center;
  }
  &:focus,
  &:visited {
    color: black;
    font-size: 20px;
    font-family: "Baloo 2", cursive;
    text-align: center;
  }
`;
