
import ProdCard from "./components/ProdCard"
import Header from "./components/Header"

import N1080ti from "./Assets/1080ti.jpg"
import N2080ti from "./Assets/2080ti.jpg"
import Ci7 from "./Assets/i7.jpg"
import Ripper from "./Assets/Ripper.jpg"
import AmdC from "./Assets/Amd5700.jpg"
import Footer from "./components/Footer"

function App(props) {
  // console.log("items upd : ", props.items);

  return (
    <div className="App">
      <Header path={props.location.pathname} items={props.items.length}></Header>
      <div className="body">
        <div className="h-card">
          <ProdCard image={N1080ti} name="Nvidia Gtx 1080ti" price="599" setItems={props.setItems} items={props.items}></ProdCard>
          <ProdCard image={N2080ti} name="Nvidia Rtx 2080ti" price="1199" setItems={props.setItems} items={props.items}></ProdCard>
          <ProdCard image={Ci7} name="i7 10th Gen " price="1199" setItems={props.setItems} items={props.items}></ProdCard>
          <ProdCard image={Ripper} name="ThredRipper 1950x 32t" price="1199" setItems={props.setItems} items={props.items}></ProdCard>
          <ProdCard image={AmdC} name="AMD RX 5700" price="1199" setItems={props.setItems} items={props.items}></ProdCard>




        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
