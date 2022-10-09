import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
// import GlobalStyle from "./styles/globalStyles";
import ViewProfile from "./pages/viewProfile_2/viewProfile";
import ViewPropertyPage from "./pages/ViewProperty/ViewPropertyPage";
import AddPropertyPage from "./pages/AddProperty/addPropertyPage";
import AlertNotification from "./components/alertBox/alertBox.component";
// import ImagesSliderPage from "./pages/ImagesSliderPage/imagesSliderPage";
import Signin from "./pages/SignIn/signin";
import CreateAccount from "./pages/CreateAccount/createAccount.component.jsx";
import ProfileCard from "./components/ProfileCard/profileCard.jsx";
// import PropertyCard from "./components/PropertyCard/propertyCard.jsx";
// import Pic from "./assets/img/Jamshed_Thug.jpg";
// import Button from "./components/buttons/button.component.jsx";
// import dropDownButton from "./components/buttons/dropDownButton";
// import Child from "./components/buttons/dropDownButton/child.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProperties } from "./Store/propertySlice";
import { fetchUsers } from "./Store/userSlice";
import { Route, Routes } from "react-router-dom";
// import AreasDropdown from "./components/buttons/dropDownButton/areasDropDown";
// import { AssuredWorkloadSharp } from "@mui/icons-material";
// import DropdownButton from "./components/buttons/dropDownButton/areasdropdownButton.jsx";
// import PropertyTypeDropDown from "./components/buttons/dropDownButton/propertytypedropdown";
// import PriceRangeDropdown from "./components/buttons/dropDownButton/pricerangedropdown";
import CostCalculator from "./components/costCalculator/costCalculator";
import SearchedProperties from "./pages/searchedProperties/searchedProperties";
// import Result from "./components/costCalculator/result";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProperties());
    dispatch(fetchUsers());
    console.log("UseEffect is running");
  }, [dispatch]);
  const user = useSelector((state) => state.auth.user);
  const Properties = useSelector((state) => state.property.properties);
  const Users = useSelector((state) => state.user.users);
  console.log("In App");
  console.log(Properties);
  console.log(Users);

  return (
    <>
      <AlertNotification />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/admin" element={<AdminLogin />} /> */}
        <Route path="/properties/:id" element={<ViewPropertyPage />} />
        <Route path="/search" element={<SearchedProperties />} />
        <Route
          path="/users/:id"
          element={<ViewProfile myProfile={false} />}
        ></Route>
        <Route path="/add" element={<AddPropertyPage />} />
        <Route path="/costCalculator" element={<CostCalculator />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      {/* <GlobalStyle /> */}
      {/*  */}
      {/*  */}
      {/* <CostCalculator /> */}
    </>
  );
}

export default App;
