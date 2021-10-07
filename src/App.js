import React, { useState } from "react";
import NavBar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  
    const [items, setItems] = useState(0);

    return (
    <div>
        <header>
            <NavBar
            items={items}/>
        </header>
        <main>
            <ItemListContainer
                greeting="Title"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere tempore perspiciatis modi sint fugiat aut dolore vel, ex amet aliquam mollitia dignissimos pariatur deleniti voluptatem eligendi sit temporibus ut adipisci."
                items={items}
                setItems={setItems}/>
        </main>
    </div>
  );
}

export default App;
