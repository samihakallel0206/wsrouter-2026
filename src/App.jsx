import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Erreur from "./pages/Erreur";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import { useState } from "react";
function App() {
  const [isAdmin, setIsAdmin]= useState(false)
  return (
    <>
      <NavBar isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
      <Routes>
        {/* route simple */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />

        {/* route dynamique */}
        <Route path="/products/:title" element={<Products />} />
         {/* {title:"5"} */}

        {/* route imbriquée : nested Route */}
        <Route path="/contact" element={<Contact />}>
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>

          {/* route protégée : protected Route */}
        <Route path="/admin" element={<PrivateRoute isAdmin={isAdmin}/>}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login setIsAdmin={setIsAdmin}/>} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
