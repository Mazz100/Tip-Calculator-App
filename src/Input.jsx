import React, { useState, useEffect, useRef } from "react";


function Input() {
    const [bill, setBill] = useState("");
    const [people, setPeople] = useState("");
    const [selectedTip, setSelectedTip] = useState("");
    const [customTip, setCustomTip] = useState("");

    const inputRef = useRef(null);

    //Create an array of objects for radio inputs
    const tips =
        //Only id and value are uniue for each input
        [{ id: "5%", value: 0.05, },
        { id: "10%", value: 0.10, },
        { id: "15%", value: 0.15, },
        { id: "25%", value: 0.25, },
        { id: "50%", value: 0.5, },]


    function updateBillValue(event) {
        setBill(event.target.value);

    }

    function updatePeopleValue(event) {
        setPeople(event.target.value);

    }

    function updateCustomTip(event) {
        setCustomTip(event.target.value);

    }

    useEffect(() => {
        if (customTip.length >= 3) {
            setCustomTip(0)
        }

    }, [customTip]);

    function updateOptionValue(event) {
        setSelectedTip(event.target.value);

    }

    useEffect(() => {
        console.log(selectedTip);

    }, [selectedTip, bill, people]);



    return (
        <>
            <div className="form-container">
                <form>
                    <div className="bill-container">
                        <label htmlFor="bill">Bill</label>
                        <input className="bill-input" onChange={updateBillValue}
                            type="number"
                            placeholder="0"
                            id="bill"
                            name="bill" value={bill} inputMode="numeric" />
                    </div>

                    <fieldset className="tip-fieldset-Grid">
                        <legend>Select Tip % </legend>

                        {tips.map(tip =>
                            <div className="input-wrapper" key={tip.id}>
                                <input ref={inputRef} className="visually-hidden"
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
                                onChange={updateCustomTip}
                                onClick={updateCustomTip}
                            />
                        </div>
                    </fieldset>

                    <div className="people-container">
                        <label htmlFor="people">Number of People</label>
                        <input className="people-input" onChange={updatePeopleValue}
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