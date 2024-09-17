import { FC } from "react";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard/dashboard";
import ProtectedRoute from "./contexts/ProtectedRoute";
import AccountSetting from "./pages/dashboard/AccountSetting";
const App: FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="account" element = {<AccountSetting/>}></Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>

  );
};

export default App;
