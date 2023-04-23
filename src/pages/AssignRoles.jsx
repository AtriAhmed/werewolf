import { useLiveQuery } from 'dexie-react-hooks'
import React, { useEffect, useState } from 'react'
import { db } from '../../db';
import { useNavigate } from 'react-router';
import { IonIcon } from '@ionic/react';
import { addOutline, arrowForward, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import Role from '../components/Role';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function AssignRoles() {
    const navigate = useNavigate()
    const [playerName, setPlayerName] = useState("")

    const [visible, setVisible] = useState(false)

    const [currentRole, setCurrentRole] = useState(0)

    const roles = useLiveQuery(() => db.currentGame.toArray())
    const [mixedRoles, setMixedRoles] = useState()

    const next = () => {
        const newArray = mixedRoles.map(item => {
            if (mixedRoles[currentRole].id === item.id) {
                // Create a new object with the same properties as the old object, except for the "name" property
                return { ...item, player: playerName };
            } else {
                // Return the original object unmodified
                return item;
            }
        });
        setMixedRoles(newArray);
        setCurrentRole((prev) => prev + 1)
        setVisible(false)
        setPlayerName("")
        if (currentRole == mixedRoles.length - 1) { db.currentGame.bulkPut(newArray); navigate("/game-started") }
    }

    useEffect(() => {
        if (roles) {
            const shuffledArray = shuffleArray([...roles]);
            setMixedRoles(shuffledArray);
        }

    }, [roles])

    if (currentRole == mixedRoles?.length) return <div>ended</div>
    return (
        <div>
            <Role role={mixedRoles ? mixedRoles[currentRole] : {}} hidden={!visible} />
            <div>
                <input placeholder='Player Name' type='text' name='name' onChange={(e) => setPlayerName(e.target.value)} value={playerName} />
            </div>
            <footer className="fixed bottom-0 w-full h-16 bg-blue-700">
                <div className="flex justify-around items-center h-full">
                    <button className="flex flex-col items-center text-center" onClick={() => setVisible(!visible)}>
                        <IonIcon icon={visible ? eyeOffOutline : eyeOutline} className='h-6 w-6 text-white' />
                    </button>

                    <button onClick={next} disabled={!playerName || !visible} className="flex flex-col items-center text-center">
                        <IonIcon icon={arrowForward} className={`h-6 w-6 ${!playerName || !visible ? 'text-gray-200 cursor-auto' : 'text-green-500'}`} />
                    </button>
                </div>
            </footer>
        </div>
    )
}
