import Button from "../buttons/button.component";
import {
  Bar,
  Box,
  Card,
  Content,
  Description,
  Img,
  SubTitle,
  Title,
} from "./propertycard.styled";
const PropertyCard = () => {
  return (
    <Card>
      <Img src={require("./../../assets/img/hero_bg.jpg")} />
      <Content>
        <Bar>
          <Box>
            <p>Hous</p>
            <p>1</p>
          </Box>
          <Box>
            <p>Hous</p>
            <p>1</p>
          </Box>
          <Box>
            <p>Hous</p>
            <p>1</p>
          </Box>
          <Box>
            <p>Hous</p>
            <p>1</p>
          </Box>
          <Box>
            <p>Hous</p>
            <p>1</p>
          </Box>
        </Bar>
        <Title>This is the title</Title>
        <SubTitle>This is subtitle</SubTitle>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quam
          quasi exercitationem ea, facilis tempore eos quibusdam, aperiam
          cupiditate
        </Description>

        <h2
          style={{
            color: "black",
            paddingTop: 30,
            float: "right",
            marginRight: "3rem",
            marginBottom: "1.5rem",
          }}
        >
          <Button />
        </h2>
      </Content>
    </Card>
  );
};

export default PropertyCard;
