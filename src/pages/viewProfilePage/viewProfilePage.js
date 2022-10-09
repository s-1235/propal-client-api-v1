import { Fragment } from "react";
import ProfileHeader from "./profileHeader";
import ServicesContainer from "./servicesContainer";
import AboutContainer from "./aboutContainer";
const ViewProfilePage = () => {
  return (
    <Fragment>
      <ProfileHeader
        image={"./assets/img/Jamshed_Thug.jpg"}
        name="Jamshed Gujjar"
        type="Contractor"
        bio="I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa."
      />
      <ServicesContainer />
      <AboutContainer />
    </Fragment>
  );
};
export default ViewProfilePage;
