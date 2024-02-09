import './App.css';
import Navbar from './Component/Navbar';
import { Mobile, SlideLabel } from './pages/Mobile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <>
      <div className='App'>


        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Mobile/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        

        </Router>

        {/* <Router>
          <Routes>
            <Route exact path="/Ragistration" element={<Ragistration/>}> </Route>
            <Route exact path="/Login" element={<Login/>}> </Route>
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
