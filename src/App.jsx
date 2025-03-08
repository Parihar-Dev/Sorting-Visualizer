import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SortingVisualizer from "./components/SortingVisualizer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualizer/:algorithm" element={<SortingVisualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
