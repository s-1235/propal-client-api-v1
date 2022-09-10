import { Card, ContentBox, Image, ImageBox } from './profilecard.styled';

const ProfileCard = () => {
  return (
    <Card>
      <ImageBox>
        <Image src={require('./../../assets/img/hero_bg.jpg')} />
      </ImageBox>

      <ContentBox>
        <h2>Mazen Ahmed</h2>
        <h3>Builder</h3>
        <h3>Rating here</h3>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          rerum cupiditate debitis nisi quasi maiores veritatis omnis nulla.
        </p>
        <h3>Button here</h3>
      </ContentBox>
    </Card>
  );
};

export default ProfileCard;
