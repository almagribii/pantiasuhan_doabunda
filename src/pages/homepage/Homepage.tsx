import { Footer } from "../../components/layout/footer";
import { Navbar } from "../../components/layout/navbar";
import ImageSlider from "./components/Slider";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 pb-12">
        <ImageSlider />
      </div>
      <Footer />
    </div>
  );
};

export { Homepage };
