


function Button({ reset, totalAmount }) {

    return (
        <>
            <button className={totalAmount > 0 ? "reset-button" : "default-button"} onClick={totalAmount > 0 ? reset : null}>Reset</button>
        </>
    );
}

export default Button
