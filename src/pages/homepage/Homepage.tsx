import { Footer } from "../../components/layout/footer";
import ImageSlider from "./components/ImageSlider";
import OrphanageInfoSection from "./components/OrphanageInfoSection";
import TabbedArticleSection from "./components/TabbedArticleSection";
import LocationSection from "./components/LocationSection";
const Homepage = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <ImageSlider />
        <OrphanageInfoSection />
        <TabbedArticleSection />
        <LocationSection />
      </div>
      <Footer/>
    </div>
  );
};

export { Homepage };
