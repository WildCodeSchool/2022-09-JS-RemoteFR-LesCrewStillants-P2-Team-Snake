import { Routes, Route } from "react-router-dom";
import Answer from "./pages/Answer";
import Home from "./pages/Home";
import Finish from "./pages/Finish";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
  );
}

export default App;
