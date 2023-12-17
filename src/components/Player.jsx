import {useState} from "react";

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        // setIsEditing(!isEditing); // schedules a state update to true
        // setIsEditing(!isEditing); // schedules a state update to true

        setIsEditing(editing => !editing) // schedules a state update to true
        // setIsEditing(editing => !editing) // schedules a state update to false
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <li className={isActive ? 'active' : null}>
            <span className="player">
                {isEditing ? <input type="text" onChange={handleChange} value={playerName} required/> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}