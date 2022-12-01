import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
function App() {
  return (
    <>
     <Router>
        <Routes>
            <Route path="/" element={<Explore/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/offers" element={<Offers/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/profile" element={<Profile/>} />
            
        </Routes>
        <Navbar/>
     </Router>
    </>
  );
}

export default App;
