import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import ContactUs from "./pages/ContactUs";
import CommonLayout from "./layouts/common";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/components" element={<Components />} />
        <Route path="/other" element={<CommonLayout />} />

      </Routes>
    </>
  )
}

export default App;
