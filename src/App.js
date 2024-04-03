import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Utama/Header";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Student from "./pages/Student";
import Footer from "./components/Utama/Footer";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div class="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character" element={<Character />} />
            <Route path="/student" element={<Student />} />
            <Route path="detail/:name" element={<Detail />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
