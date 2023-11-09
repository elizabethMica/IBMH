import {Routes, Route, useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SermonHome from "./Components/SermonsHome/SermonHome";
import SermonDetail from "./Components/Detail/SermonDetail";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact"

function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/sermones" element={<SermonHome/>}/>
        <Route path="/sermon/:id" element ={<SermonDetail/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
