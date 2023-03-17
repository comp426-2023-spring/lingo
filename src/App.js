import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.component";
import SignUp from "./components/signup.component";
import SignIn from "./components/signin.component";
import Dashboard from "./components/dashboard.component";
import Profile from "./components/profile.component";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/dashboard/:id" element={<Dashboard />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
