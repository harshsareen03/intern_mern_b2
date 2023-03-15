import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderT from './components/HeaderT';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import { Route,Routes } from 'react-router';

function App() {
  return (
   <>
   <Header/>
   {/* <HeaderT/> */}
   <Routes> 
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/aboutus' element={<About/>}/>
    <Route path='/' element={<Home/>}/>
   </Routes>
   
   
   </>
  );
}

export default App;
