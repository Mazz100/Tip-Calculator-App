import logo from './assets/logo.svg'
import Input from "./Input.jsx"
import Result from './Result.jsx';
import Button from './Button.jsx';

function TipCalculator() {

    return (
        <>
            <div className='logo'>
                <img className='logo-image' src={logo} alt="" />
            </div>
            <Input></Input>
            <Result></Result>
            <Button></Button>
        </>

    );
}

export default TipCalculator