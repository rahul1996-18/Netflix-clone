// import { Routes,Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";



function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
