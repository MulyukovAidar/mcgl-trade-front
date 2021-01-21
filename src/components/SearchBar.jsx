import React from "react"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ServerSelect from "./ServerSelect";


export function SearchBar(props) {

    return (
        <Grid container fluid>
            <Grid item xs={9}>
                <TextField label="Выделить предметы.." fullWidth />
            </Grid>
            <Grid xs={3}>
                <ServerSelect/>
            </Grid>
        </Grid>
    )
}