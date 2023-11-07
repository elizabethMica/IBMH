import {Routes, Route, useLocation} from "react-router-dom";
import SermonHome from "./Components/SermonsHome/SermonHome";
import SermonDetail from "./Components/Detail/SermonDetail";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";

function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/sermones" element={<SermonHome/>}/>
        <Route path="/sermon/:id" element ={<SermonDetail/>} />
      </Routes>
    </>
  )
}

export default App
