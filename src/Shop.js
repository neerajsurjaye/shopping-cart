
import ProdCard from "./components/ProdCard"
import Header from "./components/Header"

import N1080ti from "./Assets/1080ti.jpg"
import N2080ti from "./Assets/2080ti.jpg"
import Footer from "./components/Footer"

function App(props) {
  console.log("items upd : ", props.items);

  return (
    <div className="App">
      <Header path={props.location.pathname} items={props.items.length}></Header>
      <div className="body">
        <div className="h-card">
          <ProdCard image={N1080ti} name="Nvidia 1080ti" price="34" quantity="34" setItems={props.setItems} items={props.items}></ProdCard>
          <ProdCard image={N2080ti} name="Nvidia 2080ti" price="34" quantity="34" setItems={props.setItems} items={props.items}></ProdCard>
          <ProdCard image={N1080ti} name="Card" price="34" quantity="34" setItems={props.setItems} items={props.items}></ProdCard>



        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
