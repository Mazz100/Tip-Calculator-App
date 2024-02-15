
import Input from "./Input.jsx"
import Result from './Result.jsx';
import React, { useState } from 'react';

function TipCalculator() {
    const [tipAmount, setTipAmount] = useState('0.00');
    const [totalAmount, setTotalAmount] = useState('0.00');

    const updateTip = (tipAmount) => {
        setTipAmount(tipAmount);
    }

    const updateTotal = (totalAmount) => {
        setTotalAmount(totalAmount);
    }

    return (
        <>
            <Input updateTip={updateTip}
                updateTotal={updateTotal} />
            <Result tipAmount={tipAmount} totalAmount={totalAmount}
                updateTip={updateTip}
                updateTotal={updateTotal} />
        </>

    );
}

export default TipCalculator