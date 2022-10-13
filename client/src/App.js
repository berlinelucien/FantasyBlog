import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Students from "./components/students";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Books from "./pages/Books";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="explore" element={<Explore />} />
        </Routes>
        <Routes>
          <Route path="books" element={<Books />} />
        </Routes>
        <Routes>
          <Route path="about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="contactForm" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
