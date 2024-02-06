

function Input() {

    return (
        <>
            <div className="form-container">
                <form>
                    <label htmlFor="bill">Bill</label>
                    <input className="bill-input" type="number" placeholder="0"
                        id="bill" name="bill" value="" />

                    <fieldset className="tip-fieldset-Grid">
                        <legend>Select Tip % </legend>
                        <label htmlFor="5%">5%</label>
                        <input className="visually-hidden" type="radio" id="5%"
                            name="tip-cut" value="" />

                        <label htmlFor="10%">10%</label>
                        <input className="visually-hidden" type="radio" id="10%"
                            name="tip-cut" value="" />

                        <label htmlFor="15%">15%</label>
                        <input className="visually-hidden" type="radio" id="15%"
                            name="tip-cut" value="" />

                        <label htmlFor="25%">25%</label>
                        <input className="visually-hidden" type="radio" id="25%"
                            name="tip-cut" value="" />

                        <label htmlFor="50%">50%</label>
                        <input className="visually-hidden" type="radio" id="50%"
                            name="tip-cut" value="" />

                        <label htmlFor="custom">Custom</label>
                        <input className="visually-hidden" type="text" placeholder="Custom" id="custom"
                            name="tip-cut" value="" />
                    </fieldset>

                    <label htmlFor="people">Number of People</label>
                    <input className="people-input" type="number" placeholder="0"
                        id="people" name="people" value="" />
                </form>
            </div>
        </>

    );
}

export default Input