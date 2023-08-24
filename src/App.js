import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import Homepage from "./modules/homepage/Homepage.module";
import Store from "./store/store";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <Homepage />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
