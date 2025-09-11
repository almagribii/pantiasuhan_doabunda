import { Footer } from "../../components/layout/footer";
import { Navbar } from "../../components/layout/navbar";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl">Halo Dunia!</h1>
      <p>Ini adalah komponen App yang valid.</p>
      <Footer />
    </div>
  );
};

export { Homepage };
