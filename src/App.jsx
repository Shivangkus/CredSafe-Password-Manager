import "./App.css";
import Navbar from "../src/components/Navbar";
import { Manager } from "./components/Manager";
import {Footer} from "../src/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Manager />
      <Footer />
    </>
  );
}

export default App;
