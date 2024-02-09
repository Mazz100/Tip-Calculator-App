import TipCalculator from "./TipCalculator.jsx"
import logo from './assets/logo.svg'

function App() {

  return (
    <>
      <div className='logo'>
        <img className='logo-image' src={logo} alt="" />
      </div>
      <main className='main'>
        <TipCalculator />
      </main>

      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/Mazz100">Mazen Hassan</a>.
      </footer>
    </>
  )
}

export default App
