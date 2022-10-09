import HeaderContainer from "./headerContainer";
import ImagesContainer from "./imagesContainer";
import BottomContainer from "./bottomContainer";
import AboutPropertyContainer from "./aboutPropertyContainer";
import { getAProperty } from "../../Store/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
const ViewPropertyPage = () => {
  const [propertyData, setPropertyData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const dumy = async () => {
      const data = await getAProperty(id);
      console.log(data?.data?.data?.data);
      setPropertyData(data?.data?.data?.data);
    };
    dumy();
  }, [id]);
  return (
    <>
      <HeaderContainer
        Name={propertyData?.name}
        City={propertyData?.city}
        Area={propertyData?.area}
      />
      <ImagesContainer />
      <BottomContainer
        Garages={propertyData?.noofgarages}
        Bedrooms={propertyData?.noofbedrooms}
        Washrooms={propertyData?.noofwashrooms}
        Price={propertyData?.price}
      />
      <Divider
        variant="inset"
        sx={{
          width: "1150px",
          marginLeft: 12.5,
          marginTop: -2,
        }}
      />
      <AboutPropertyContainer
        City={propertyData?.city}
        Area={propertyData?.area}
        Date={propertyData?.createdAt}
        Garages={propertyData?.noofgarages}
        Bedrooms={propertyData?.noofbedrooms}
        Washrooms={propertyData?.noofwashrooms}
        Description={propertyData?.description}
        Price={propertyData?.price}
        Name={propertyData?.name}
      />
    </>
  );
};
export default ViewPropertyPage;
