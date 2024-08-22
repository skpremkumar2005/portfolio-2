// import logo from './logo.svg';
import './App.css';
import {Route,Router,BroswerRouter, Routes} from "react-router-dom"
import Experience from './Experience';
import Project from './Project';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Projectwell from './Projectwell';
function App() {
  return (
    <div className="App">
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/project/:id' element={<Projectwell/>}/>
      <Route path='/exp' element={<Experience/>}/>
     
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
