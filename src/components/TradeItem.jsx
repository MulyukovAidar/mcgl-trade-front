import React, { useState } from "react"
import diamond from "../diamond.png"


export function TradeItem({ id, position, codeName, name }) {
    const [selected, setSelection] = useState(false)
    const toggle = () => setSelection(current => !current)
    return (
        <div className={`tradeItem ${selected ? "tradeItemSelected" : ""}`} onClick={toggle}>
            {console.log(id, position, codeName, name )}
            <div className="tradeImage" style={{ backgroundPosition: position.split(":")[1] }}></div>
        </div>
    )
}