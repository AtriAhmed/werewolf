import { useLiveQuery } from 'dexie-react-hooks';
import React, { useEffect, useState } from 'react'
import { db } from '../../db';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { add, addOutline, arrowForward } from 'ionicons/icons';
import Role from '../components/Role';
import AddRoleCmp from '../components/AddRoleCmp';

export default function RolesSelection() {
    const [modalShow, setModalShow] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState([])
    const roles = useLiveQuery(
        () => db.currentGame.toArray()
    );

    useEffect(() => {
        setSelectedRoles(roles)
    }, [roles])

    return (
        <>
            <div className='grid grid-cols-12 gap-4 py-[80px] px-5'>
                {selectedRoles?.map((role) => <Role key={role.id} role={role} buttonType={"delete"} />)}
            </div>
            <AddRoleCmp show={modalShow} hide={() => { setModalShow(false); }} />
            <footer className="fixed bottom-0 w-full h-16 bg-blue-700">
                <div className="flex justify-around items-center h-full">
                    <button className="flex flex-col items-center text-center bg-blue-500 rounded-full p-2" onClick={() => setModalShow(true)}>
                        <IonIcon icon={add} className='h-6 w-6 text-white' />
                    </button>
                    <div className='bg-white rounded-full p-2 font-bold text-blue-700 w-[40px] h-[40px] flex items-center justify-center'>{selectedRoles?.length}</div>
                    <Link to={selectedRoles?.length > 6 ? "/assign-roles" : "#"} className={`flex flex-col items-center text-center ${selectedRoles?.length > 6 ? 'bg-green-500' : 'bg-gray-200 cursor-auto'} rounded-full p-2`}>
                        <IonIcon icon={arrowForward} className={`h-6 w-6 text-white`} />
                    </Link>
                </div>
            </footer>
        </>
    )
}
