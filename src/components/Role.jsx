import React from 'react'
import { db } from '../../db'

export default function Role({ role, hidden, del }) {
    async function deleteRole(role) {
        db.currentGame.delete(role.id)
    }
    return (
        <div className='text-white col-span-4 flex flex-col justify-center items-center relative' key={role.id}><div className='w-full h-full'><img src={"images/roles/" + role.image} className='object-contain w-full h-full' /></div><div>{hidden ? "?????????????" : role.name}</div>{del ? <button className='text-xl absolute top-0 right-0 bg-red-500 rounded-full w-7 h-7 text-center' onClick={() => deleteRole(role)}>X</button> : ""}</div>
    )
}
