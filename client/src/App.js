import Navbar from "./components/Navbar/Navbar";
import {Table} from "./components/Table/Table";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <h3 className="d-flex justify-content-center my-2 card p-3 shadow">
        React JS Frontend
      </h3>
      <Navbar/>
      <Table/>
    </div>
  );
}

export default App;
