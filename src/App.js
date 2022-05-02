import './App.scss';
import { BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    </>
  );
}

export default App;
