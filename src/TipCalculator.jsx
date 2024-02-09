import logo from './assets/logo.svg'
import Input from "./Input.jsx"
import Result from './Result.jsx';
import Button from './Button.jsx';

function TipCalculator() {

    return (
        <>  
            {/* You don't really need to divide as Input and Result. */}  
            {/* Think of making component for reusable purpose */}
            <Input></Input>
            <Result></Result>
        </>

    );
}

export default TipCalculator