
import Input from "./Input.jsx"
import Result from './Result.jsx';
import React, { useState } from 'react';

function TipCalculator() {
    const [tipAmount, setTipAmount] = useState('0.00');
    const [totalAmount, setTotalAmount] = useState('0.00');

    //Input states
    const [bill, setBill] = useState("");
    const [selectedTip, setSelectedTip] = useState("");
    const [people, setPeople] = useState("");
    const [customTip, setCustomTip] = useState("");


    function handleBillValue(event) {
        setBill(event.target.value);
    }

    function resetBillValue() {
        setBill('');
    }

    function handlePeopleValue(event) {
        setPeople(event.target.value);
    }

    function resetPeopleValue() {
        setPeople('');
    }

    function updateOptionValue(event) {
        setSelectedTip(event.target.value);

    }

    function resetOptionValue() {
        setSelectedTip('');
    }

    function handleCustomTip(event) {
        if (selectedTip) {
            resetOptionValue();

        }
        setCustomTip(event.target.value);
    }

    function resetCustomTip() {
        setCustomTip('');
    }

    const updateTip = (tipAmount) => {
        setTipAmount(tipAmount);
    }

    const updateTotal = (totalAmount) => {
        setTotalAmount(totalAmount);
    }

    const resetValues = () => {
        updateTip('0.00');
        updateTotal('0.00');

        //Not resetting unless a value is defined
        if (totalAmount > 0) {
            resetBillValue();
            resetOptionValue();
            resetPeopleValue();
            resetCustomTip();
        }

    }

    return (
        <>
            <Input updateTip={updateTip}
                updateTotal={updateTotal}
                bill={bill}
                handleBillValue={handleBillValue}
                resetBillValue={resetBillValue}
                selectedTip={selectedTip}
                updateOptionValue={updateOptionValue}
                resetOptionValue={resetOptionValue}
                people={people}
                handlePeopleValue={handlePeopleValue}
                resetPeopleValue={resetPeopleValue}
                customTip={customTip}
                handleCustomTip={handleCustomTip}
                resetCustomTip={resetCustomTip}/>


            <Result tipAmount={tipAmount} totalAmount={totalAmount}
                resetValues={resetValues} />
        </>

    );
}

export default TipCalculator