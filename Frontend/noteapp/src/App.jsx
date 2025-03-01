import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfileInfo from "./components/Cards/ProfileInfo"; 
import ProfilePage from "./pages/ProfilePage/ProfilePage";


const App = () => {
  return (
      <Router>
          <Routes>

              <Route path="/" element={<LandingPage />} />  

              <Route path="/dashboard" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              <Route path="/" element={<ProfileInfo />} />
        <Route path="/profile" element={<ProfilePage />} />
          </Routes>
      </Router>

      
  );
};

export default App;
