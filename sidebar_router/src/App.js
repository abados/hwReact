import "./App.css";
import {
  AboutPage,
  ContactusPage,
  GamesPage,
  HomePage,
  MoviesPage,
  NotFoundPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import { Rightside } from "./components/rightside";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Rightside></Rightside>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutpage" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactusPage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/games" element={<GamesPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
