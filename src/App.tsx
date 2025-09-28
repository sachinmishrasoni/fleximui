import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </>
  )
}

export default App;
