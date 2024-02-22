import "./App.css";
import Home from "./pages/Home";
import Resister from "./pages/ResisterUser";
import FindPatient from "./pages/FindPatient";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";

// Axios
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/createUser" element={<Resister />}></Route>
          <Route path="/FindPatient" element={<FindPatient />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
