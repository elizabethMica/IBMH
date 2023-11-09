import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SermonHome from "./Components/SermonsHome/SermonHome";
import SermonDetail from "./Components/Detail/SermonDetail";
import Landing from "./Components/Landing/Landing";
import Navigation from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact"

function App() {
 

  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/sermones" element={<SermonHome/>}/>
        <Route path="/sermon/:id" element ={<SermonDetail/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default App
