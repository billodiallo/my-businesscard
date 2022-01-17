import Info from "./InfosApp";
import About from '../components/About'
import Interest from "./Interest";
import '../components/App.css'

const  App = () => {
  return (
    <div className="App">
    <Info />
    < About/>
    <Interest />
    </div>
  );
}

export default App;
