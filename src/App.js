import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Header from "./components/header/Header";
import Home from './components/header/Home.js';
import About from "./components/about/About";
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import Skill from "./components/skill/Skill";

import Project from "./components/project/Project.js";
import NavbarRoute from "./components/navbar/NavbarRoute.js";
import Contactme from "./components/contact/Contactme.js";
function App() {
  return (
    <div className="App">
     
      {/* <Header></Header> */}


      <BrowserRouter basename="/portfolio">
      <NavbarRoute></NavbarRoute>
    
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/skill' element={<Skill></Skill>}></Route>
<Route path="/project" element={<Project></Project>}></Route>

<Route path="/contact" element={<Contactme></Contactme>}></Route>



      </Routes>
      
      </BrowserRouter>
   
     
    </div>
  );
}

export default App;
