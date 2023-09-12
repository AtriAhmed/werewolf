import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className='relative z-0'>
            <Outlet />
            </div>
        </>
    )
}
