import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <div className="container">
        <div className="raw">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" exect element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
