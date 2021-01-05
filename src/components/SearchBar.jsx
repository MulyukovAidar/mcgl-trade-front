import React, { useState } from "react"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { positions } from '@material-ui/system';
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

export function SearchBar(props) {
    const [serverName, setServerName] = useState(["Любой"]);

    const handleChange = (event) => {
        setServerName(event.target.value);
    }

    
    return (
        <Grid container fluid>
            <Grid item xs={9}>
                <TextField label="Выделить предметы.." fullWidth />
            </Grid>
            <Grid xs={3}>
            <InputLabel id="demo-mutiple-name-label" mt={18}>Сервер</InputLabel>
                <Select
                    fullWidth
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    multiple
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
            </Grid>
        </Grid>
    )
}