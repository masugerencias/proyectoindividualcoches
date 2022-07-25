import './App.css';
import Cnavbar from './componentes/Cnavbar';
import Cfooter from './componentes/Cfooter';
import MainComponent from './componentes/Main';
import { BrowserRouter } from "react-router-dom";
import Ccarrousel from './componentes/Ccarrousel';
/**
 * 
 * @returns El renderizado principal de los componentes que queramos que estén en todas las páginas.
 */
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




