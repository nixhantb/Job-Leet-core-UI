import { FC } from "react";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
