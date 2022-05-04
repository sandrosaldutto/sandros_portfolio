import './App.scss';
import { BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Header/>
        <Skills/>
      </BrowserRouter>
    </>
  );
}

export default App;
