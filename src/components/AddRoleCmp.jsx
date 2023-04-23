import { useLiveQuery } from 'dexie-react-hooks';
import React, { useEffect, useState } from 'react'
import { db } from '../../db';
import { debounce } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default function AddRoleCmp() {

    const [selectedRoles, setSelectedRoles] = useState([])

    const currentRoles = useLiveQuery(
        () => db.currentGame.toArray()
    );

    const roles = useLiveQuery(
        () => db.roles.toArray()
    );

    useEffect(() => {
        setSelectedRoles(currentRoles)
    }, [currentRoles])

    function addRole(role) {
        if (canAdd(role)) {
            console.log(selectedRoles?.length)
            role.id = uuidv4();
            db.currentGame.add(role).then(res => {
                console.log("success")
            }).catch(err => {
                console.log(err)
            })
        } else {
            console.log("not added")
        }
    }


    const canAdd = (role) => {
        if (selectedRoles?.some((currentRole) => currentRole.name == role.name) && role.repeat == false) {
            return false
        }
        return true
    }

    return (
        <div>{roles?.map((role, index) => <div className='' key={index}><div>{role.name}</div>{canAdd(role) ? <button className='text-xl' onClick={() => addRole(role)}>+</button> : <></>} </div>)}</div>
    )
}
