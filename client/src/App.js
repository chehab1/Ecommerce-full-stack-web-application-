import "./App.css";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./components/Footer/Footer";
import ProductView from "./components/ProductView/ProductView";
import Cart from "./components/Cart/Cart";
import UserContext from "./contexts/userContext";
import { useState, useContext } from "react";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Settings" element={<Settings />}></Route>
          <Route path="/Product/:id" element={<ProductView />}></Route>
          <Route path="*" element={<Home />}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
