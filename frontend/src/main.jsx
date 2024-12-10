import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import SignUp from './pages/SignUp.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const main =() =>{
  return(
    <ToastContainer/>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ToastContainer />
        <App />
        <Navbar />
        <Footer />
      </div>
    ),
  },
  {
    path: "login",
    element: (
      <div>
        <ToastContainer />
        <Navbar /> <Login /> <Footer />
      </div>
    ),
  },
  {
    path: "forgot-password",
    element: (
      <div>
        <ToastContainer />
        <Navbar /> <ForgotPassword />
        <Footer />
      </div>
    ),
  },
  {
    path: "sign-up",
    element: (
      <div>
        <ToastContainer />
        <Navbar />
        <SignUp />
        <Footer />
      </div>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
