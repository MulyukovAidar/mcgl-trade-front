import React, { useState } from "react"
import { Box, Popover, Slider, TextField, Typography } from "@material-ui/core";

export default function TradeSlider({ updateMultiplier, tradeDeal }) {

    const [value, setValue] = useState(tradeDeal.sellq);
    const [anchorEl, setAnchorEl] = useState(null);
    const step = tradeDeal.sellq;

    const handleMessageClick = (event) => {
        try {
            event.target.select();
            document.execCommand("copy");
            setTimeout(() => setAnchorEl(event.target), 300);
        }
        catch (e) { }
    }

    const handleClose = () => setAnchorEl(null);

    const changeHandler = (event, newValue) => {
        if (newValue !== value) {
            console.log("value updated ", value)
            setValue(newValue);
            updateMultiplier(newValue / tradeDeal.sellq);
        }
    }

    return (
        <Box width={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgcolor="rgba(225, 226, 225, 0.36)"
            pt={4}
            borderBottom={1}>
            <Slider
                className="tradeDetails"
                onChange={changeHandler}
                aria-labelledby="discrete-slider"
                value={value}
                valueLabelDisplay="on"
                step={step}
                marks
                min={tradeDeal.sellq}
                max={tradeDeal.sellq * 50}
            />
            <Box
                error={tradeDeal.stock < tradeDeal.buyq * value / step}
                helperText={tradeDeal.stock < tradeDeal.buyq * value / step ? "Недостаточно в запасе" : null}
                display="block"
                width={0.6}
                multiline
                component={TextField}
                id="filled-read-only-input"
                value={`@${tradeDeal.seller} Здравствуйте, хочу купить у вас ${tradeDeal.buyq * value / step} ${tradeDeal.buy.name} на сервере ${tradeDeal.buyServer} за ${tradeDeal.sellq * value / step} ${tradeDeal.sell.name} на сервере ${tradeDeal.sellServer}`}
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
                onClick={handleMessageClick}
            />
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography>Текст скопирован в буфер обмена</Typography>
            </Popover>
        </Box>
    )
}