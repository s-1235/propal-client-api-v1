import AreaCard from '../../../components/area-card/areacard.component';
import { HotSection } from './hotarea.styled';
import { Container, FlexRow } from './../../../styles/utils.styled';
import { SectionHeading } from '../../../styles/typograpghy.styled';

const HotArea = () => {
  return (
    <HotSection>
      <Container>
        <SectionHeading>Hot Areas for you baby</SectionHeading>
        <FlexRow>
          <AreaCard />
          <AreaCard />
          <AreaCard />
        </FlexRow>
      </Container>
    </HotSection>
  );
};

export default HotArea;
