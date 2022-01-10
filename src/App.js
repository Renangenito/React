import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/paginaComRouter/Home";
import Sobre from "./components/paginaComRouter/Sobre";
import Error404 from "./components/paginaComRouter/Error404";
import NavBar from "./components/paginaComRouter/NavBar";

function App() {
  return (
   
    <Router>
    <NavBar />
      <Routes>
        <Route  path='/Home' element={<Home/>} />
        <Route  path='/Sobre' element={ <Sobre />} />
        <Route  path='*' element={<Error404 />} />
      </Routes>
    </Router>

  );
}

export default App;
