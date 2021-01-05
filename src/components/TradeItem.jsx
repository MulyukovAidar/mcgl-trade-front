import React, { useState } from "react"
import diamond from "../diamond.png"


export function TradeItem(props) {
    const [selected, setSelection] = useState(false)
    const toggle = () => setSelection(current => !current)
    return (
        <div className={`tradeItem ${selected ? "tradeItemSelected" : ""}`} onClick={toggle}>
            <div className="tradeImage" style={{ backgroundPosition: props.position }}></div>
        </div>
    )
}