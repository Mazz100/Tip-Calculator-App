

function Input() {

    return (
        <>
            <div className="form-container">
                <form>
                    <div className="bill-container">
                        <label htmlFor="bill">Bill</label>
                        <input className="bill-input" type="number" placeholder="0"
                            id="bill" name="bill" value="" />
                    </div>

                    <fieldset className="tip-fieldset-Grid">
                        <legend>Select Tip % </legend>
                        <div className="input-wrapper">
                            <label className="tip-label" htmlFor="5%">5%</label>
                            <input className="visually-hidden" type="radio" id="5%"
                                name="tip-cut" value="" />
                        </div>

                        <div className="input-wrapper">
                            <label className="tip-label" htmlFor="10%">10%</label>
                            <input className="visually-hidden" type="radio" id="10%"
                                name="tip-cut" value="" />
                        </div>

                        <div className="input-wrapper">
                            <label className="tip-label" htmlFor="15%">15%</label>
                            <input className="visually-hidden" type="radio" id="15%"
                                name="tip-cut" value="" />
                        </div>

                        <div className="input-wrapper">
                            <label className="tip-label" htmlFor="25%">25%</label>
                            <input className="visually-hidden" type="radio" id="25%"
                                name="tip-cut" value="" />
                        </div>

                        <div className="input-wrapper">
                            <label className="tip-label" htmlFor="50%">50%</label>
                            <input className="visually-hidden" type="radio" id="50%"
                                name="tip-cut" value="" />
                        </div>

                        <div className="input-wrapper">
                            <label className="visually-hidden" htmlFor="custom">Custom</label>
                            <input className="custom-input" type="text" placeholder="Custom" id="custom"
                                name="tip-cut" value="" />
                        </div>
                    </fieldset>

                    <div className="people-container">
                        <label htmlFor="people">Number of People</label>
                        <input className="people-input" type="number" placeholder="0"
                            id="people" name="people" value="" />
                    </div>
                </form>
            </div>
        </>

    );
}

export default Input