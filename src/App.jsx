import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
