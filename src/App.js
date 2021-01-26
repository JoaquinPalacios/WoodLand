// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './Container/ItemListContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={`Hola Mundo`}/>
    </>
  );
}

export default App;
