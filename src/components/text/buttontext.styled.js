import styled from "styled-components";
import { DropdownContainer } from "../buttons/button.styled";
export const Text = styled.p`
  & {
    position: relative;
    z-index: ${(props) => (props.zindex ? props.zindex : 0)};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontsize};
    font-family: ${(props) => props.fontfamily};
    font-weight: ${(props) => props.weight};
    width: ${(props) => props.width};
  }
`;
