import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </>
  );
}

export default App;