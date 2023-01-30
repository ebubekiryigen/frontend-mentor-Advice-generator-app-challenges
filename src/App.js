import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import data from "./data"

function App() {
  
  const [datas, setDatas] = useState()



  return (
    <div className="App">
        <section>
            <Cart />
        </section>
    </div>
  );
}

export default App;
