import Navbar from "./components/Navbar/Navbar";
import { Table } from "./components/Table/Table";
import { About } from "./components/About/About";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Head from "./components/Head/Head";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <ToastContainer position="bottom-right" />
        <Head />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Table} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
