import styled from "styled-components";

export const Btn = styled.button`
  ${(props) =>
    !props.isSearch &&
    !props.isCategory &&
    !props.isdropdown &&
    ` &{
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        position: relative;
        background-color: white;
        padding: 16px;
        border: none;
        cursor: pointer;
        z-index: -100;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
  ${(props) =>
    props.isCategory &&
    ` &{
          width: ${(props) => props.width};
          height: ${(props) => props.height};
          color: white;
          font-size: 50px;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          background: none;
          outline: none;
          border: none;
          margin-bottom: 5px;
        }
        &:focus{
          background-color: black;
      border-radius: 20px;
        }
      `}

  ${(props) =>
    props.isSearch &&
    `
        &{display: flex;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        justify-content: center;
        align-items: center;
        padding-right: 8px;
        padding-left: 8px;
        border-radius: 0 20px 20px 0;
        outline:none;
        border:none;
        background-color: ${(props) => (props.active ? "white" : "#5F9EA0")};
        }
        &:active{
          background-color:#5F9EA0;
        }
    `}

  ${(props) =>
    props.isbefore &&
    `
      &:before {
        content: "";
        width: 2px;
        height: 100px;
        background-color: black;
        position: absolute;
        left: 0;
        padding: 2px;
      }
    `}
    ${(props) =>
    props.isdropdown &&
    `
    {
    position:relative;
    outline:none;
    border:none;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: White;
    display: inline-block;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding:15px;
    }
    &:first-of-type{
    border-radius: 20px 0 0 20px;

    }
      `}
`;
export const DropdownContainer = styled.div`
  display: block;
  margin-top: 35px;
  position: absolute;
  width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;
export const Data = styled.button`
  & {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 7px 7px 7px 7px;
    width: 180px;
  }
  &:hover {
    background-color: #e8e8e8;
  }
`;
export const Datacontainer = styled.button`
  & {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: white;
  }
`;
