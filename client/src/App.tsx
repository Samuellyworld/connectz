// import relevant module
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// import each pages
import LandingPage from "./pages/landing";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import VerifyPage from "./pages/verify";
import ForgotPasswordPage from './pages/forgot-password';
import ProfilePage from "./pages/profile";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const App : () => JSX.Element = () => {
   const currentUser : string = useSelector((state : RootState) => 
     state?.currentUser?.currentUser?.token
   )
    return (
       <Router>
         <Routes>
           <Route path='/' element={<LandingPage />} />
           <Route path='/signup' element={<SignUpPage/>} />
           <Route path='/signin' element={currentUser ? <Navigate to='/profile'/> : <SignInPage/>}   />
           <Route path='/verify' element={<VerifyPage/> } />
           <Route path='/forgot-password' element={<ForgotPasswordPage/> } />
           <Route path='/profile'  element={currentUser ? <ProfilePage/> : <Navigate to="/signin" /> } />
         </Routes>
       </Router>
 
    
    );
}
export default App;
