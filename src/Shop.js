
import ProdCard from "./components/ProdCard"
import Header from "./components/Header"

import cardA from "./Assets/a.jpg"
import Footer from "./components/Footer"

function App(props) {
  console.log("items upd : ", props.items);

  return (
    <div className="App">
      <Header path={props.location.pathname} items={props.items.length}></Header>
      <div className="body">
        <div className="h-card">
          <ProdCard image={cardA} name="Card" price="34" quantity="34" setItems={props.setItems} items={props.items}></ProdCard>
          <ProdCard image={cardA} name="Gpu" price="34" quantity="34" setItems={props.setItems} items={props.items}></ProdCard>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
