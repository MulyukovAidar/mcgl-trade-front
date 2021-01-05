import React, { useState } from "react"
import { TradeItem } from "./TradeItem"
import { items } from "./items"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
export function ItemSection(props) {
    const [active, setActive] = useState(false)
    const toggle = () => setActive(current => !current);

    return (
        <Container fluid>
            <Box borderLeft={1} onClick={toggle}>
                <Button fullWidth variant="outlined" color="default">Ресурсы
                </Button>
            </Box>

            {active && <div className="tradeCategory">
                {items.map(value => {
                    return <TradeItem position={value} />
                })}

            </div>
            }
        </Container>
    )
}