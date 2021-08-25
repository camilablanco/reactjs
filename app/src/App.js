import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return(
    <>
    <header>
    <NavBar />
    {/* <ItemListContainer text="Hola, Juan Carlos!"> */}
    <ItemListContainer />
    </header>
    </>
  )
}

export default App;
