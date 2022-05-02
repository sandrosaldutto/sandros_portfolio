import './App.scss';
import { BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Header/>
      </BrowserRouter>
    </>
  );
}

export default App;
