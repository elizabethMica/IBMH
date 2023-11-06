import {Routes, Route, useLocation} from "react-router-dom";
import SermonHome from "./Components/SermonsHome/SermonHome";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/sermones" element={<SermonHome/>}/>
      
      </Routes>
    </>
  )
}

export default App
