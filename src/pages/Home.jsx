import { useLiveQuery } from 'dexie-react-hooks';
import React, { useState } from 'react'
import { db } from '../../db';
import { useNavigate } from 'react-router';

export default function Home() {

    const navigate = useNavigate()
    const [playersNumber, setPlayersNumber] = useState()

    const roles = useLiveQuery(
        () => db.roles.limit(playersNumber).toArray()
        , [playersNumber]);

    const handleChange = (e) => {
        setPlayersNumber(e.target.value)
    }

    const startGame = () => {
        db.currentGame.clear().then(async (res) => {
            const id = await db.currentGame.bulkPut(roles);
            navigate("/roles")
        })

    }

    return (
        <div className='flex justify-center items-center h-[75vh]'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <input placeholder='Players Number (7 minimum)' type="text" className='bg-transparent text-xl text-center outline-none text-white font-bold' onChange={handleChange} />
                <button className='text-xl font-bold bg-white w-[50%] py-2 rounded' onClick={startGame}>START</button>
            </div>
        </div>
    )
}
