import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
