import AddPropertyHeader from "./addPropertyHeader";
import AddPropertyBottom from "./addPropertyBottom";
// import UploadImagesAddProperty from "./uploadImagesAddProperty";
import { useEffect, useState } from "react";
const AddPropertyPage = () => {
  const propertydata = {
    type: "",
    subtype: "",
    category: "",
    address: {
      province: "",
      city: "",
      area: "",
      otherArea: "",
      edgeDetails: {
        block: "",
        blockNumber: 0,
        HouseNumber: 0,
      },
    },

    areaDetails: {
      size: 0,
      unit: "",
      contactNumber: "",
    },
    priceDetails: {
      prepayment: 0,
      prepaymentUnit: "",
      totalPrice: 0,
      totalPriceUnit: "",
      securityCharges: 0,
      securityChargesUnit: "",
    },
    keycharacteristics: {
      noOfGarages: 0,
      noOfBedrooms: 0,
      noOfWashrooms: 0,
    },
    description: "",
  };
  const [propertyCategory, setPropertyCategory] = useState("");
  const [headerFormIsValid, setHeaderFormIsValid] = useState(false);
  const [bottomFormIsValid, setBottomFormIsValid] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    if ((headerFormIsValid, bottomFormIsValid)) {
      setFormIsValid(true);
      console.log("form is valid");
    } else {
      setFormIsValid(false);
    }
  }, [headerFormIsValid, bottomFormIsValid]);
  const SubmitHandler = () => {
    console.log(
      propertydata.type,
      propertydata.subtype,
      propertydata.category,
      propertydata.address.province,
      propertydata.address.city,
      propertydata.address.area,
      propertydata.address.otherArea,
      propertydata.address.edgeDetails.block,
      propertydata.address.edgeDetails.blockNumber,
      propertydata.address.edgeDetails.HouseNumber,
      propertydata.address.areaDetails.size,
      propertydata.address.areaDetails.unit,
      propertydata.address.areaDetails.contactNumber,
      propertydata.address.priceDetails.prepayment,
      propertydata.address.priceDetails.prepaymentUnit,
      propertydata.address.priceDetails.totalPrice,
      propertydata.address.priceDetails.totalPriceUnit,
      propertydata.address.priceDetails.securityCharges,
      propertydata.address.priceDetails.securityChargesUnit,
      propertydata.address.keycharacteristics.noOfGarages,
      propertydata.address.keycharacteristics.noOfBedrooms,
      propertydata.address.keycharacteristics.noOfWashrooms,
      propertydata.description
    );
    setFormIsSubmitted(true);
  };
  return (
    <div style={{ width: "100%" }}>
      <AddPropertyHeader
        SetPropertyCategory={setPropertyCategory}
        PropertyData={propertydata}
        SetHeaderFormIsValid={setHeaderFormIsValid}
        PropertyCategory={propertyCategory}
        FormIsSubmitted={formIsSubmitted}
      />
      <AddPropertyBottom
        PropertyCategory={propertyCategory}
        PropertyData={propertydata}
        SetBottomFormIsValid={setBottomFormIsValid}
        FormIsValid={formIsValid}
        FormIsSubmitted={formIsSubmitted}
        SubmitHandler={SubmitHandler}
      />

      {/* <UploadImagesAddProperty /> */}
    </div>
  );
};
export default AddPropertyPage;
