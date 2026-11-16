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
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* route simple */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />

        {/* route imbriquée : nested Route */}
        <Route path="/contact" element={<Contact />}>
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/admin" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
