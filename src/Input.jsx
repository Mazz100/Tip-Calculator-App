import React, { useState, useEffect, useRef } from "react";
import propTypes from 'prop-types'

function Input({ updateTip, updateTotal }) {
    const [bill, setBill] = useState("");
    const [people, setPeople] = useState("");
    const [selectedTip, setSelectedTip] = useState("");
    const [customTip, setCustomTip] = useState("");


    //Create an array of objects for radio inputs
    const tips =
        //Only id and value are uniue for each input
        [{ id: "5%", value: 0.05 },
        { id: "10%", value: 0.10 },
        { id: "15%", value: 0.15 },
        { id: "25%", value: 0.25 },
        { id: "50%", value: 0.5 },]


    function handleBillValue(event) {
        setBill(event.target.value);

    }

    function handlePeopleValue(event) {
        setPeople(event.target.value);
    }

    function handleCustomTip(event) {
        setCustomTip(event.target.value);

    }

    useEffect(() => {
        if (customTip.length > 3 || customTip < 0) {
            setCustomTip('');
        }

        else if (bill.length > 10 || bill < 0) {
            setBill('');
        }

        else if (people.length > 10 || people < 0) {
            setPeople('');
        }

    }, [customTip, bill, people]);

    function updateOptionValue(event) {
        setSelectedTip(event.target.value);

    }

    useEffect(() => {
        //Declaring let data to calculate the tip amount per person
        let addedTip = parseFloat(bill) * parseFloat(selectedTip);
        //Dividing the bill + tip by people numbers and gives total amount
        let totalCharge = (addedTip + parseFloat(bill)) / parseFloat(people);

        if (selectedTip && bill && people) {
            console.log(totalCharge);
            updateTip(addedTip.toFixed(2) / people);
            updateTotal(totalCharge.toFixed(2));
        }

        //Custom tip variable
        //converting the custom input to percentage
        let addedCustomTip = parseFloat(bill) * parseFloat(customTip) / 100;
        let totalCustomCharge = (addedCustomTip + parseFloat(bill)) / parseFloat(people);
        if (bill && people && !selectedTip) {
            console.log(totalCustomCharge);
            updateTip(addedCustomTip.toFixed(2) / people);
            updateTotal(totalCustomCharge.toFixed(2));

        }

        return () => {
            //Restore all values to default
        }

    }, [selectedTip, bill, people]);


    return (
        <>
            <div className="form-container">
                <form>
                    <div className="bill-container">
                        <label htmlFor="bill">Bill</label>
                        <input className="bill-input" onChange={handleBillValue}
                            type="number"
                            placeholder="0"
                            id="bill"
                            name="bill" value={bill} inputMode="numeric" />
                    </div>

                    <fieldset className="tip-fieldset-Grid">
                        <legend>Select Tip % </legend>

                        {tips.map(tip =>
                            <div className="input-wrapper" key={tip.id}>
                                <input className="visually-hidden"
                                    type="radio"
                                    id={tip.id}
                                    name="tip-cut"
                                    value={tip.value}
                                    onChange={updateOptionValue}
                                />
                                <label className="tip-label" htmlFor={tip.id}>{tip.id}</label>
                            </div>
                        )}

                        <div className="input-wrapper">
                            <label className="visually-hidden" htmlFor="custom">Custom</label>
                            <input className="custom-input"
                                type="number" placeholder="Custom"
                                id="custom"
                                name="tip-cut"
                                value={customTip}
                                onChange={handleCustomTip}
                                size={3}
                            />
                        </div>
                    </fieldset>

                    <div className="people-container">
                        <label htmlFor="people">Number of People</label>
                        <p>{people == 0 ? `Can't be zero` : ''}</p>
                        <input className="people-input" onChange={handlePeopleValue}
                            type="number"
                            placeholder="0"
                            id="people"
                            name="people" value={people} inputMode="numeric" />

                    </div>
                </form>
            </div>
        </>

    );
}


export default Input