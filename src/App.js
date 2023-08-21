import "./App.css";

//routing imports
import { BrowserRouter } from "react-router-dom";

import Homepage from "./modules/homepage/Homepage.module";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;
