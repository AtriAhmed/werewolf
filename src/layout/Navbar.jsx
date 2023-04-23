import React, { useEffect, useState } from 'react'
import { IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useNavigate } from 'react-router';

export default function Navbar() {
    const navigate = useNavigate()
    const array = [
        {
            path: "/",
            title: "Welcome to Were Wolf",
            backBtn: false
        },
        {
            path: "/roles",
            title: "Roles",
            backBtn: true
        },
        {
            path: "/assign-roles",
            title: "Assign roles",
            backBtn: true
        },
        {
            path: "/game-started",
            title: "Game",
            backBtn: true
        }
    ]

    const [pageData, setPageData] = useState({})

    useEffect(() => {
        const path = window.location.pathname;
        const a = array.find(e => e.path == path)
        setPageData(a)
    }, [window.location.pathname])

    return (
        <nav className='bg-blue-900 text-white font-bold flex p-5'>{pageData.backBtn ? <button onClick={() => navigate(-1)}><IonIcon icon={arrowBack} className="text-xl" /></button> : ""}<div className='flex justify-center w-full'>{pageData?.title}</div></nav>
    )
}
