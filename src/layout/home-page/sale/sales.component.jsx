import PropertyCard from './../../../components/property-card/propertycard.component';
import { SectionHeading } from './../../../styles/typograpghy.styled';
import { Container, FlexColumn } from './../../../styles/utils.styled';
import { SalesSection } from './sales.styled';

const Sales = () => {
  return (
    <SalesSection>
      <Container>
        <SectionHeading>Recent Property for Sales</SectionHeading>
        <FlexColumn>
          <PropertyCard />
          <PropertyCard />
        </FlexColumn>
      </Container>
    </SalesSection>
  );
};

export default Sales;
