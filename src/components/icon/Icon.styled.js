import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";

export const ICON = styled.img.attrs((props) => ({
  src: props.source,
}))`
  width:${(props) => props.width},
height:${(props) => props.height},
cursor: pointer;
transform:${(props) => (props.rotate ? "rotate(180deg)" : "rotate(0deg)")};
`;
