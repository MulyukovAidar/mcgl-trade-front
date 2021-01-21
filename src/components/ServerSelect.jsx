import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
const servers = [
    "Любой",
    "Survival",
    "Advanced",
    "Nano",
    "Demo",
    "Hunter",
    "Guest",
    "Zeus",
    "Little Big Planet",
    "Monkey",
    "Miner",
    "Main",
    "Clans",
    "Pirate Station",
    "Rookie",
    "Newbie",
    "Build",
    "Pacific",
    "Novice",
    "Team",
    "Farm",
    "Prometeus",
    "Laboratory",
    "Dragon Nest",
    "Atlantida"
];

export default function ServerSelect(props) {
    const [serverName, setServerName] = useState(["Любой"]);

    const handleChange = (event) => {
        setServerName(event.target.value);
    }
    return (
        <>
            <InputLabel id="demo-mutiple-name-label" mt={18}>Сервер</InputLabel>
            <Select
                fullWidth
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                // multiple
                value={serverName}
                onChange={handleChange}
                input={<Input />}
            >
                {servers.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </>
    )
}