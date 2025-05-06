import { Routes, Route } from "react-router-dom";
import { About, Contact, Home } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
