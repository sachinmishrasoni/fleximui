import ComponentsLayout from '@/layouts/components';
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Components from '@/pages/Components';

const ComponentsRoutes: React.FC = () => {
  return (
    <Routes>
        <Route Component={ComponentsLayout}>
            <Route path="/" element={<Components />} />
            <Route path="/button" element={<div>Button</div>} />
            <Route path="/dropdown" element={<div>DropDown</div>} />
            <Route path="/menu" element={<div>Menu</div>} />
        </Route>
    </Routes>
  )
}

export default ComponentsRoutes;
