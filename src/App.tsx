import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import CommonLayout from "./layouts/common";
import ComponentsRoutes from "./routes/ComponentsRoutes";
import PagesRoutes from "./routes/PagesRoutes";


function App() {

  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/other" element={<CommonLayout />} />
        </Route>

        <Route path="/components/*" element={<ComponentsRoutes />} />
        <Route path="/pages/*" element={<PagesRoutes />} />

      </Routes>
    </>
  )
}

export default App;
