import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from './PublicRoute'
import { AuthProvider } from "../contexts/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute> <Signup /> </PublicRoute>} />
            <Route path="/login" element={  <PublicRoute> <Login /> </PublicRoute>} />
            <Route path="/quiz" element={ <PrivateRoute> <Quiz /> </PrivateRoute>} />
            <Route path="/result" element={<PrivateRoute> <Result /> </PrivateRoute>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
