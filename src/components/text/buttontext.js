import { Text } from "./buttontext.styled";
function ButtonText(props) {
  return <Text {...props}>{props.text}</Text>;
}
export default ButtonText;
