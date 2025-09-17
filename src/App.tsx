import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import Article from "./pages/article/Article";
import {Kontak} from "./pages/tentang/menu/kontak/Kontak";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/artikel" element={<Article />} />
      <Route path="/kontak" element={<Kontak />} />
    </Routes>
  );
}

export default App;
