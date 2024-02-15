import Button from "./Button.jsx";
import propTypes from 'prop-types';
import TipCalculator from "./TipCalculator.jsx";

function Result({ tipAmount, totalAmount, updateTotal, updateTip }) {
    const resetValues = () => {
        updateTip('0.00');
        updateTotal('0.00');
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
                        <span className="span-value" id="tip-value">${tipAmount}</span>
                    </div>
                </div>

                <div className="total-people">
                    <div className="total-text">
                        <p>Total</p>
                        <span className="person-span">/ person</span>
                    </div>

                    <div className="people-value">
                        <span className="span-value" id="total-value">${totalAmount}</span>
                    </div>
                </div>

                <Button reset={resetValues}></Button>
            </div>
        </>
    );
}


export default Result