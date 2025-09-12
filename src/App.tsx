import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import Article from "./pages/article/Article";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/artikel" element={<Article />} />
    </Routes>
  );
}

export default App;
