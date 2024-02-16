import React, { useState } from "react";

function Button({ reset, totalAmount }) {
    const [buttonUi, setButtonUi] = useState("default-button");

    return (
        <>
            <button className={totalAmount > 0 ? "reset-button" : buttonUi} onClick={reset}>Reset</button>
        </>
    );
}

export default Button
