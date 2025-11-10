import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CompoundInterestSimulator from "./pages/CompoundInterestSimulator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compound-interest-simulator" element={<CompoundInterestSimulator />} />
      </Routes>
    </BrowserRouter>
  );
}
