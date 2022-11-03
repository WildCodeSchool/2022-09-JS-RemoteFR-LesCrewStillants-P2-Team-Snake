import { Routes, Route } from "react-router-dom";
import Answer from "./pages/Answer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
    </div>
  );
}

export default App;
