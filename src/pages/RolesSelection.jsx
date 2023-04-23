import { useLiveQuery } from 'dexie-react-hooks';
import React, { useEffect, useState } from 'react'
import { db } from '../../db';
import AddRoleModal from '../components/AddRoleModal';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { addOutline, arrowForward } from 'ionicons/icons';
import Role from '../components/Role';

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
            <div className='grid grid-cols-12 gap-4'>
                {selectedRoles?.map((role) => <Role key={role.id} role={role} del={true} />)}
            </div>
            <AddRoleModal show={modalShow} hide={() => { setModalShow(false); }} />
            <footer className="fixed bottom-0 w-full h-16 bg-blue-700">
                <div className="flex justify-around items-center h-full">
                    <button className="flex flex-col items-center text-center" onClick={() => setModalShow(true)}>
                        <IonIcon icon={addOutline} className='h-6 w-6 text-white' />
                    </button>
                    <div className='text-white font-bold'>{selectedRoles?.length}</div>
                    <Link to={selectedRoles?.length > 6 ? "/assign-roles" : "#"} className="flex flex-col items-center text-center">
                        <IonIcon icon={arrowForward} className={`h-6 w-6 ${selectedRoles?.length > 6 ? 'text-green-500' : 'text-gray-200 cursor-auto'}`} />
                    </Link>
                </div>
            </footer>
        </>
    )
}
