import React from "react"
import Typography from '@material-ui/core/Typography';

export const ExchangeRate = ({ tradeDeal }) => {
    return <>
        <Typography className="zoom" variant="h6">
            1 ×
           <div
                className="tradeImageResource tradeItemPositionFix"
                style={{ backgroundPosition: tradeDeal.buy.position }}>
            </div>
            стоит {parseFloat((tradeDeal.sellq / tradeDeal.buyq).toPrecision(4))} ×
            <div className="tradeImageResource tradeItemPositionFix"
                style={{ backgroundPosition: tradeDeal.sell.position }}>
            </div>
        </Typography>
        <Typography className="zoom" variant="h6">
            1 ×
            <div className="tradeImageResource tradeItemPositionFix"
                style={{ backgroundPosition: tradeDeal.sell.position }}>
            </div>
            стоит {parseFloat((tradeDeal.buyq / tradeDeal.sellq).toFixed(4))} ×
            <div
                className="tradeImageResource tradeItemPositionFix"
                style={{ backgroundPosition: tradeDeal.buy.position }}>
            </div>
        </Typography>
    </>
}