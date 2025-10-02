import React from 'react'
import { Route, Routes } from 'react-router-dom';

const PagesRoutes: React.FC = () => {
  return (
    <Routes>
        <Route>
            <Route path="/" element={<div>Pages</div>} />
            <Route path="/error" element={<div>Error</div>} />
        </Route>
    </Routes>
  )
}

export default PagesRoutes;
