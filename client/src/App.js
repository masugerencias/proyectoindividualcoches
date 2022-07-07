import './App.css';
import Cnavbar from './componentes/Cnavbar';
import Cfooter from './componentes/Cfooter';
import MainComponent from './componentes/Main';
import { BrowserRouter ,Link } from "react-router-dom";
import Ccarrousel from './componentes/Ccarrousel';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
        
    <Cnavbar/>     
        <MainComponent />
        <Cfooter/>
    </div>
</BrowserRouter>

  );
}
export default App;




