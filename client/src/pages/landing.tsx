// import relevant module

// import relevant components that make up the landingPage
import Header from "../components/header";
import Main from "../components/splash-section";

const LandingPage : () => JSX.Element = () => {
    return (
       <>
       <Header bool={false}/>
       <Main/>
       </>
    );
}

export default LandingPage;