import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Filme from "./Pages/Filme";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/mateuslatini-react/" element={<Home/>} />
        <Route
          path="/mateuslatini-react/:filmesId"
          element={<Filme/>}
        />
    
    </Routes>
    </BrowserRouter>

  )
  
}

export default App;
