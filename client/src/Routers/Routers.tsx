import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RouterChangeLineAnimation from './RouterChangeLineAnimation'
import MasterLayout from '../Layout/NavLayout/MasterLayout'
import HomePage from '../pages/HomePage'
import NotFound from '../Layout/NotFound'
import ProjectPage from '../pages/ProjectPage'



const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            {/* Route change line loader */}
            <RouterChangeLineAnimation />
            <Routes>
                <Route path='/' element={<MasterLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='project' element={<ProjectPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Routers