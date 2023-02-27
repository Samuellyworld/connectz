// import relevant module
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// import each pages
import LandingPage from "./pages/landing";
import SignUpPage from "./pages/sign-up";

const App : () => JSX.Element = () => {
    return (
       <Router>
         <Routes>
           <Route path='/' element={<LandingPage />} />
           <Route path='/register' element={<SignUpPage/>} />
         </Routes>
       </Router>
 
    
    );
}
export default App;
