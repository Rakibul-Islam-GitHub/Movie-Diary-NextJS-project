import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent';
import { createContext, useState } from 'react';

export const userContext = createContext();

function MyApp({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
  
  <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <NavbarComponent />
  <div className='container'> 
  
  <Component {...pageProps} />
  </div>
  </userContext.Provider>
  
  )
  
  
}

export default MyApp
