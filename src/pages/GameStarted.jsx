import { useLiveQuery } from 'dexie-react-hooks'
import React, { useState } from 'react'
import { db } from '../../db'
import Role from '../components/Role'

export default function GameStarted() {
    const [started, setStarted] = useState(false)
    const players = useLiveQuery(() => db.currentGame.toArray())

    if (!started) return <div className='w-full h-[100vh] flex justify-center items-center'>
        <button className='bg-white py-2 px-5 rounded-lg text-blue-700 font-bold text-xl' onClick={() => setStarted(true)}>START</button>
    </div>
    return (
        <div className='grid grid-cols-12 gap-4 py-[80px] px-5'>
            {players?.map((player, index) => <Role role={player} showPlayerName/>)}
        </div>
    )
}
