import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return <center>
    <ClockHeading/>
    <ClockSlogan></ClockSlogan>
    <CurrentTime/>
  </center>
  
}

export default App
