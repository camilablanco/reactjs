import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Item from './components/Item';

const App = () => {
  return(
    <>
    <header>
    <NavBar />
    {/* <ItemListContainer text="Hola, Juan Carlos!"> */}
    <ItemListContainer />
    <Item />
    </header>
    </>
  )
}

export default App;
