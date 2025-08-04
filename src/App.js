import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';

import Home from './components/header/Home.js';
import About from "./components/about/About";
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import Skill from "./components/skill/Skill";

import Project from "./components/project/Project.js";
import NavbarRoute from "./components/navbar/NavbarRoute.js";
import Contactme from "./components/contact/Contactme.js";
import AllPage from "./components/AllPage.js";
import {useState,useEffect} from 'react'

function App() {
  
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 100); // Update progress every 100ms
      return () => clearInterval(interval);
    }
  }, [progress]);

 
  return (
    // <div className="App" style={{ paddingTop: '120px' }}>
       <div className="App">
    


      <BrowserRouter>
      <NavbarRoute></NavbarRoute>
    
      <Routes>
    
      <Route path='/' element={<AllPage></AllPage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        
        <Route path='/skill' element={<Skill></Skill>}></Route>
<Route path="/project" element={<Project></Project>}></Route>

<Route path="/contact" element={<Contactme></Contactme>}></Route>



      </Routes>
      
      </BrowserRouter>
   
     
    </div>
  );
}

export default App;
