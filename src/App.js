import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.component";
import SignUp from "./components/signup.component";
import SignIn from "./components/signin.component";
import Dashboard from "./components/dashboard.component";
import Profile from "./components/profile.component";
import NavBar from './components/navbar.component';
import LogOut from './components/logout.component';

function App() {
  return (
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/dashboard/" element={<Dashboard />}></Route>
          <Route path="/profile/" element={<Profile />}></Route>
          <Route path="/log-out/" element={<LogOut />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
