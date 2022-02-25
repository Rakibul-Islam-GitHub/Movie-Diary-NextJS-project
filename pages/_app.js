import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent';


function MyApp({ Component, pageProps }) {
  return (
  <>
  <NavbarComponent />
  <div className='container'> 
  
  <Component {...pageProps} />
  </div>
  </>
  )
  
  
}

export default MyApp
