import Button from "./Button.jsx";

function Result() {
    return (
        <>
            <div className="result-container">
                <div className="tip-amount">
                    <div className="tip-text">
                        <p>Tip Amount</p>
                        <span className="person-span">/ person</span>
                    </div>

                    <div className="tip-value">
                        <span className="span-value" id="tip-value">$0.00</span>
                    </div>
                </div>

                <div className="total-people">
                    <div className="total-text">
                        <p>Total</p>
                        <span className="person-span">/ person</span>
                    </div>

                    <div className="people-value">
                        <span className="span-value" id="total-value">$0.00</span>
                    </div>
                </div>

                <Button></Button>
            </div>
        </>
    );
}

export default Result