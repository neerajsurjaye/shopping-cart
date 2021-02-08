
import ProdCard from "./components/ProdCard"
import Header from "./components/Header"

import cardA from "./Assets/a.jpg"

function App(props) {
  // console.log(props.location.pathname);

  return (
    <div className="App">
      <Header path={props.location.pathname}></Header>
      <div className="body">
        <div className="h-card">
          <ProdCard image={cardA} name="Card" price="34" quantity="34"></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34"></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34"></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34"></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34"></ProdCard>
          <ProdCard image={cardA} name="Card" price="34" quantity="34"></ProdCard>
        </div>
      </div>
    </div>
  );
}

export default App;
