import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Login/login.css';
import NavbarComponent from '../components/NavbarComponent';
import { createContext, useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';

export const userContext = createContext();

function MyApp({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useState({});
  
 useEffect(()=>{ 

  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  setLoggedInUser({email: email, displayName: name});


 }, [])


  
  return (
  
  <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <NavbarComponent />
  <div className='container'> 
  
  <Component {...pageProps} />
  </div>
  <Footer></Footer>
  </userContext.Provider>
  
  )
  
  
}

export default MyApp
