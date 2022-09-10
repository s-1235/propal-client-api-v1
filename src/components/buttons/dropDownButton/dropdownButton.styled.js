import styled from "styled-components";
export const DropdownBtn = styled.button`
  outline: none;
  border: none;
  color: #fff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #16a085;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 3px 8px #193047;
  border-radius: 4px;
  &:hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #1abc9c;
    color: #000;
  }
  &:after {
    content: "";
    background: #1abc9c;
    display: block;
    position: absolute;
    padding-top: 180%;
    padding-left: 100%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  &:focus {
    outline: 0;
  }
`;
