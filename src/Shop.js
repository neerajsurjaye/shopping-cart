
import ProdCard from "./components/ProdCard"
import Header from "./components/Header"

import cardA from "./Assets/a.jpg"

function App(props) {
  console.log(props);

  return (
    <div className="App">
      <Header path={props.location.pathname} cart={props.cart}></Header>
      <div className="body">
        <div className="h-card">
          <ProdCard image={cardA} name="Card" price="34" quantity="34" cart={props.cart} setCart={props.setCart}></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34" cart={props.cart} setCart={props.setCart}></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34" cart={props.cart} setCart={props.setCart}></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34" cart={props.cart} setCart={props.setCart}></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34" cart={props.cart} setCart={props.setCart}></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34" cart={props.cart} setCart={props.setCart}></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34" cart={props.cart} setCart={props.setCart}></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34" cart={props.cart} setCart={props.setCart}></ProdCard>
        </div>
      </div>

    </div>
  );
}

export default App;
