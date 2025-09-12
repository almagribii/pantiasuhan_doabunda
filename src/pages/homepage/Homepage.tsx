import { Footer } from "../../components/layout/footer";
import { Navbar } from "../../components/layout/navbar";
import ImageSlider from "./components/ImageSlider";
import OrphanageInfoSection from "./components/OrphanageInfoSection";
import TabbedArticleSection from "./components/TabbedArticleSection";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 ">
        <ImageSlider />
      </div>
      <OrphanageInfoSection />
      <Footer />
    </div>
  );
};

export { Homepage };
