import logo from './assets/madrilenalogo.jpg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Inicio from './Inicio';
import Menu from './menu';
import Contacto from './contacto';


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="bienvenida">Bienvenido</h1>
              <Button variant="warning" size="lg" className="botonAcceder"
              onClick={() =>{alert('Hiciste click');
              window.location.href = '/inicio';}}
              >Acceder</Button>
              
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        </a>
      </header>
    </div>
 }  />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </Router>
  );
}

export default App;
