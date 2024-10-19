import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Header from "./components/header/Header";
import Home from './components/header/Home.js';
import About from "./components/about/About";
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import Skill from "./components/skill/Skill";

import Project from "./components/project/Project.js";
function App() {
  return (
    <div className="App">
     
      <Header></Header>
      <BrowserRouter >
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/skill' element={<Skill></Skill>}></Route>
<Route path="/project" element={<Project></Project>}></Route>
      </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
