import { Card, CardBottom, CardTop, Image } from './areacard.styled';
const AreaCard = () => {
  return (
    <Card>
      <CardTop>
        <Image src={require('./../../assets/img/hero_bg.jpg')} />
      </CardTop>
      <CardBottom>
        <h2>Bahria Town</h2>
        <p>100+ Houses for Sale</p>
      </CardBottom>
    </Card>
  );
};

export default AreaCard;
