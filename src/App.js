import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Container } from "@mui/material";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import Trending from "./pages/Trending/Trending";
import Series from "./pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
