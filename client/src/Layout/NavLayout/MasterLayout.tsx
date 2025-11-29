import React from 'react'

import NavAdmin from './NavAdmin'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { userRole } from '../../constants/demouser/User'
import type { MasterLayoutProps } from '../../Typeinterface/InterfaceType'
import { mockFooterData } from '../../constants/Data/data'

const MasterLayout: React.FC<MasterLayoutProps> = ({ children, hideFooter = false, className = "" }) => {
    const role = userRole.role
    return (
        <div className={className}>
            {/* conditional nav  */}
            {role === "admin" ? <NavAdmin /> : <Navbar />}
            {/* page content (use Outlet for nested routes) */}
            <main>
                {/* If you pass children directly when wrapping, show them, otherwise Outlet */}
                {/* children pass jsx components or outlet pass nested routes  */}
                {children ? children : <Outlet />}
            </main>
            {!hideFooter && <Footer data={mockFooterData} />}
        </div>
    )
}

export default MasterLayout