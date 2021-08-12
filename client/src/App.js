import Navbar from "./components/Navbar/Navbar";
import { Table } from "./components/Table/Table";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <ToastContainer position="bottom-right" />
      <h3 className="d-flex justify-content-center my-2 card p-3 shadow">
        React JS - Client
      </h3>
      <Navbar />
      <Table />
    </div>
  );
}

export default App;
