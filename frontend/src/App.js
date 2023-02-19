import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import DefaultLayout from './components/layouts/DefaultLayout'
import Home from "./pages/Home.js"
import PrivateRoute from "./components/others/authentication/PrivateRoute";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registraion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={
          <PrivateRoute>
            <DefaultLayout childComponent={<Home/>} />
          </PrivateRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
