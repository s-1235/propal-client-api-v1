// import MegaBar from "../../../components/megabar/megabar.component";
import { HeroContainer, HeroCenter, Overlay } from "./hero.styled";
import { Typography, Box, Grid } from "@mui/material";
import SearchBar from "../../../components/searchBar/searchBar";
const Hero = () => {
  return (
    <HeroContainer>
      <Overlay />
      <HeroCenter>
        <h1>Propal</h1>
        <h2>A Revolutionary Platform in Real Estate</h2>
        {/* <MegaBar /> */}
        <SearchBar />
      </HeroCenter>
    </HeroContainer>
  );
};

export default Hero;
