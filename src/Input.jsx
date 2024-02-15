import React, { useState, useEffect, useRef } from "react";
import propTypes from 'prop-types'

function Input({ updateTip, updateTotal, bill, handleBillValue,
    resetBillValue, selectedTip, updateOptionValue, handlePeopleValue,
    resetPeopleValue, people, handleCustomTip, resetCustomTip, customTip }) {

    //Create an array of objects for radio inputs
    const tips =
        //Only id and value are uniue for each input
        [{ id: "5%", value: 0.05 },
        { id: "10%", value: 0.10 },
        { id: "15%", value: 0.15 },
        { id: "25%", value: 0.25 },
        { id: "50%", value: 0.5 },]


    useEffect(() => {
        //Declaring let data to calculate the tip amount per person
        let addedTip = parseFloat(bill) * parseFloat(selectedTip);
        //Dividing the bill + tip by people numbers and gives total amount
        let totalCharge = (addedTip + parseFloat(bill)) / parseFloat(people);

        if (selectedTip && bill && people != 0) {
            updateTip((addedTip / people).toFixed(2));
            updateTotal(totalCharge.toFixed(2));
        }

        //Custom tip variable
        //converting the custom input to percentage
        let addedCustomTip = parseFloat(bill) * parseFloat(customTip) / 100;
        let totalCustomCharge = (addedCustomTip + parseFloat(bill)) / parseFloat(people);

        if (bill && people != 0 && !selectedTip) {
            updateTip((addedCustomTip / people).toFixed(2));
            updateTotal(totalCustomCharge.toFixed(2));

        }

        //Blocking too many digits 
        if (customTip.length > 3 || customTip < 0) {
            resetCustomTip();
        }

        else if (bill.length > 10 || bill < 0) {
            resetBillValue();
        }

        else if (people.length > 4 || people < 0) {
            resetPeopleValue();
        }


    }, [selectedTip, bill, people, customTip]);


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
                                    checked={selectedTip == tip.value}
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

                            />
                        </div>
                    </fieldset>

                    <div className="people-container">
                        <div className="label-error-Flex-row">
                            <label htmlFor="people">Number of People</label>
                            <p>{people == 0 ? `Can't be zero` : ''}</p>
                        </div>
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