import NavBar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/main/ItemListContainer";

function App() {
  return (
    <div>
        <header>
            <NavBar/>
        </header>
        <main>
            <ItemListContainer
                greeting="Hola mundo"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere tempore perspiciatis modi sint fugiat aut dolore vel, ex amet aliquam mollitia dignissimos pariatur deleniti voluptatem eligendi sit temporibus ut adipisci."/>
        </main>
    </div>
  );
}

export default App;
