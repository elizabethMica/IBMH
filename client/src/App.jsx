import {Routes, Route, useLocation} from "react-router-dom";
import SermonHome from "./Components/SermonsHome/SermonHome";
import SermonDetail from "./Components/Detail/SermonDetail";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/sermones" element={<SermonHome/>}/>
        <Route path="/sermon/:id" element ={<SermonDetail/>} />
      </Routes>
    </>
  )
}

export default App
