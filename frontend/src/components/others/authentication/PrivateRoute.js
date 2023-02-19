import { Navigate } from "react-router-dom"

const fakeAuth = {
  isAuthenticated: localStorage.getItem("loggedIn") === 'true'
}

function PrivateRoute({ children }) {
  return fakeAuth.isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute