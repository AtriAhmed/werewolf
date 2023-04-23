import { useLiveQuery } from 'dexie-react-hooks'
import React, { useState } from 'react'
import { db } from '../../db'

export default function GameStarted() {
    const [started, setStarted] = useState(false)
    const players = useLiveQuery(() => db.currentGame.toArray())

    if (!started) return <div className='w-full h-[75vh] flex justify-center items-center'>
        <button className='text-white' onClick={() => setStarted(true)}>START</button>
    </div>
    return (
        <div>
            {players?.map((player, index) => <div key={index}>{player.player} : {player.name} </div>)}
        </div>
    )
}
