import React, { useState, useEffect } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ServerSelect from "./ServerSelect";
import { Box, Container, TextField } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import items from "./itemsString";
import { resourcesCategory } from "./tradeCategories"
import { TradeItem } from "./TradeItem"
import Grid from '@material-ui/core/Grid';

const itemTypes = [
    "Ресурсы",
    "Блоки",
    "Предметы",
    "Инструменты"
]

export default function TradeForm(props) {
    const [state, setState] = useState({
        server: "Survival",
        itemType: itemTypes[0]
    });

    let resources = []

    resources = items.map((string) => {
        const [i, position, id, junk, codeName, name] = string.split('|');
        return {
            id,
            position,
            codeName,
            name
        }
    });
    resources = resources.filter(el => resourcesCategory.includes(Number.parseInt(el.id)));

    const itemTypeChange = (e) => {
        if (state.itemType !== e.target.value) {
            setState({ ...state, itemType: e.target.value });
        }
    }

    return (
        <Grid container>
            <Grid item container xs={6}>
                <Grid component={Container} container>
                    <FormControl xs={4} component={Grid} container className="tradeFormPadding">
                        <Grid component={InputLabel} id="demo-mutiple-name-label" mt={18}>Товар на продажу</Grid>
                        <Grid component={Select}
                            fullWidth
                            labelId="demo-mutiple-name-label"
                            id="demo-mutiple-name"
                            // multiple
                            value={state.itemType}
                            onChange={itemTypeChange}
                            input={<Input />}
                        >
                            {itemTypes.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Grid>
                        {/* <FormHelperText>Что продаю</FormHelperText> */}
                    </FormControl>
                    <Grid component={TextField}
                        className="tradeFormPadding"
                        xs
                        label="Кол-во"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl component={Grid} xs={4} className="tradeFormPadding">
                        <ServerSelect />
                        {/* <FormHelperText>Где продаю</FormHelperText> */}
                    </FormControl>

                    <Grid component={TextField}
                        className="tradeFormPadding"
                        xs
                        label="Запас"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Grid item component={Box} mt={4} xs={12} className="tradeCategory">
                        {resources.map(el => <TradeItem id={el.id} name={el.name} codeName={el.codeName} position={el.position} />)}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}