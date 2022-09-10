import MegaBar from '../../../components/megabar/megabar.component';
import { HeroContainer, HeroCenter, Overlay } from './hero.styled';

const Hero = () => {
  return (
    <HeroContainer>
      <Overlay />
      <HeroCenter>
        <h1>Heading here</h1>
        <h2>Toggle Button</h2>
        <MegaBar />
      </HeroCenter>
    </HeroContainer>
  );
};

export default Hero;
