import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import Article from "./pages/article/Article";
import { Rekening } from "./pages/rekening/Rekening";
import { Kontak } from "./pages/tentang/menu/kontak/Kontak";
import { Navbar } from "./components/layout/navbar.tsx";
import { Footer } from "./components/layout/footer.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-8">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/artikel" element={<Article />} />
          <Route path="/rekening" element={<Rekening />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
