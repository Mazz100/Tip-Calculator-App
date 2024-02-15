

function Button({ reset, totalAmount }) {
    const defaultButton = {
        backgroundColor: 'hsl(178, 100%, 16%)',
        color: 'black',
    }

    return (
        <>
            <button className="reset-button" onClick={reset}>Reset</button>
        </>
    );
}

export default Button
