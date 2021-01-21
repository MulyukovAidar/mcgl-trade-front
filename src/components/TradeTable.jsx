import React, { useState } from "react";
import { Box, Button, Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { ExchangeRate } from "./ExchangeRate";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TradeSlider from "./TradeSlider";
import ImportExportIcon from '@material-ui/icons/ImportExport';

const sell = {
  id: 264,
  name: "Алмаз",
  position: "-224px -96px"
}

const buy = {
  id: 265,
  name: "Слиток железа",
  position: "-224px -32px"
}

const tradeDeal = {
  sell,
  buy,
  id: 0,
  stock: 2800,
  sellq: 100,
  buyq: 490,
  server: "Survival",
  seller: "KOT_OBORMOT",
  sellServer: "Survival",
  buyServer: "Demo"
}

export default function TradeTable(props) {
  const [tradeOption, setTradeOption] = useState({
    show: false,
    multiplier: 1
  })

  const updateMultiplier = (newMultiplier) => {
    setTradeOption({ ...tradeOption, multiplier: newMultiplier });
  }
  return (
    <Grid container fluid>
      <Box component={Grid} border={1} container fluid direction="row" justify="space-between">
        <Grid item xs={3} direction="column">
          <ExchangeRate tradeDeal={tradeDeal} />
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={5}>
            <Typography align="right">{`У меня есть на ${tradeDeal.sellServer}`}</Typography>
            <Typography align="right">
              {tradeDeal.sell.name}
              <div
                className="tradeImageResource tradeItemPositionFix"
                style={{ backgroundPosition: tradeDeal.sell.position }}>
              </div>
              {" × "}
              {tradeDeal.sellq * tradeOption.multiplier}
            </Typography>
          </Grid>
          <Grid container item xs={2} mt="10" justify="center" alignItems="center">
            <ImportExportIcon fontSize="large" style={{transform: "rotate(90deg)"}}/>
          </Grid>
          <Grid item xs={5}>
            <Typography align="left">{`Куплю на ${tradeDeal.buyServer}`}</Typography>
            <Typography align="left">
              {tradeDeal.buyq * tradeOption.multiplier}
              {" × "}
              <div
                className="tradeImageResource tradeItemPositionFix"
                style={{ backgroundPosition: tradeDeal.buy.position }}>
              </div>
              {tradeDeal.buy.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container component={Typography} align="right" item xs={3}>
          <Grid item xs={7}>
            <Box component={Typography} fontSize={10} align="center">{`Запас: ${tradeDeal.stock} ${tradeDeal.buy.name}`}</Box>
          </Grid>
          <Grid align="center" item xs={5}>
            <Typography variant="button" color="primary">{tradeDeal.seller}</Typography>
          </Grid>
          <Grid>
            <Button align="left" size="small" color="primary" variant="outlined"
              onClick={() => setTradeOption({ ...tradeOption, show: !tradeOption.show })} >
              Связаться с продавцом
            </Button>
          </Grid>
        </Grid>
      </Box>
      {tradeOption.show && <TradeSlider
        updateMultiplier={updateMultiplier}
        tradeDeal={tradeDeal} />}
    </Grid>
  )
}