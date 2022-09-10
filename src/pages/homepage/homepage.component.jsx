import Footer from "../../layout/footer/footer.component";
import Contactors from "../../layout/home-page/contractors/contractors.component";
import Hero from "../../layout/home-page/hero/hero.component";
import HotArea from "../../layout/home-page/hot-area/hotarea.component";
import Rent from "../../layout/home-page/rent/rent.component";
import Sales from "../../layout/home-page/sale/sales.component";
import Navbar from "../../layout/navbar/navbar.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      {/* <Sales /> */}
      <Rent />
      <Contactors />
      {/* <HotArea /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
