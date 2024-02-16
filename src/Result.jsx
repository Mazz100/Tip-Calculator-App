import Button from "./Button.jsx";


function Result({ tipAmount, totalAmount, updateTotal, updateTip,
    resetBillValue, resetOptionValue, resetPeopleValue, resetCustomTip }) {
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
            <div className="result-container">
                <div className="tip-amount">
                    <div className="tip-text">
                        <p>Tip Amount</p>
                        <span className="person-span">/ person</span>
                    </div>

                    <div className="tip-value">
                        <span style={tipAmount.length >= 10 ? { fontSize: '1.5rem' } : { fontSize: '2.5rem' }} className="span-value">${tipAmount}</span>
                    </div>
                </div>

                <div className="total-people">
                    <div className="total-text">
                        <p>Total</p>
                        <span className="person-span">/ person</span>
                    </div>

                    <div className="people-value">
                        <span style={totalAmount.length >= 10 ? { fontSize: '1.5rem' } : { fontSize: '2.5rem' }} className="span-value">${totalAmount}</span>
                    </div>
                </div>

                <Button reset={resetValues}
                    resetBill={resetBillValue}
                    totalAmount={totalAmount} />
            </div >
        </>
    );
}


export default Result