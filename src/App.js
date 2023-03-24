import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.component";
import SignUp from "./components/signup.component";
import SignIn from "./components/signin.component";
import Cardsets from "./components/cardsets.component";
import Profile from "./components/profile.component";
import NavBar from './components/navbar.component';
import CreateCard from './components/create_card.component';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/cardsets/:id" element={<Cardsets />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/create_card/:id" element={<CreateCard />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
