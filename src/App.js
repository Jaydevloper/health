import { Route, Routes } from "react-router-dom";
import Login from "./auth/login/login";
import Signup from "./auth/signup/signup";
import Home from "./Home/home";
import Add from "./modules/add/add";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
      </>
  );
}

export default App;
