import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Grid } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import { ExchangeRate } from "./ExchangeRate";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
  stock: 800,
  sellq: 100,
  buyq: 490,
  server: "Survival",
  seller: "KOT_OBORMOT"
}

export default function TradeTable(props) {
  return (
    <Grid container fluid>


      <Box component={Grid} border={1} container fluid direction="row" justify="space-between">
        <Grid item xs={3} direction="column">
          <ExchangeRate tradeDeal={tradeDeal} />
        </Grid>
        <Grid container item xs={6}>

          <Grid item xs={5}>
            <Typography align="right">Продам</Typography>
            <Typography align="right">
              {tradeDeal.sell.name}
              <div
                className="tradeImageResource tradeItemPositionFix"
                style={{ backgroundPosition: tradeDeal.sell.position }}>
              </div>
              {" × "}
              {tradeDeal.sellq}
            </Typography>
          </Grid>
          <Grid container item xs={2} mt="10" justify="center" alignItems="center">
            <ArrowBackIcon />
            <ArrowForwardIcon />
          </Grid>
          <Grid item xs={5}>
            <Typography align="left">Куплю</Typography>
            <Typography align="left">
              {tradeDeal.buyq}
              {" × "}
              <div
                className="tradeImageResource tradeItemPositionFix"
                style={{ backgroundPosition: tradeDeal.buy.position }}>
              </div>
              {tradeDeal.buy.name}
            </Typography>
          </Grid>

        </Grid>
        <Grid component={Typography} align="right" item xs={3}>продавец и прочая лабуда</Grid>
      </Box>
    </Grid>
  )
}