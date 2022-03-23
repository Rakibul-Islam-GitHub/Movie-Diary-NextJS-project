import { Navbar, Nav, CardImg} from 'react-bootstrap';
import Link from 'next/link'
import { useContext } from 'react';
import { userContext } from '../pages/_app';
import Image from 'next/image';

const NavbarComponent = () => {
  const [loggedInUser, setloggedInUser] = useContext(userContext);
  console.log(loggedInUser);
    return (
        <>
       
    <Navbar  variant="dark" style={{padding:'20px', backgroundColor:'#0f494e'}}>
    
     <div className='container'>

     <Link href="/" passHref>

     <Navbar.Brand className='logo'>
     <img className='mr-1'
        alt="logo"
        src="/images/logo.png"
        width="30"
        height="30"
        
      />{'  '}
       Movie Diary</Navbar.Brand>

       </Link>
     
    <Nav className="ml-auto ">
      <Link href="/" passHref>
      <Nav.Link className='nav-text' >All Reviews</Nav.Link>
      </Link>
       <Link href="/addreview" passHref>
       <Nav.Link className="ml-3 nav-text" >Add New Review</Nav.Link>
       </Link>

       {loggedInUser.email? <Link href="/logout" passHref>
       <Nav.Link className="ml-3" style={{color:'#ff131e', fontWeight:'bold'}} >Logout</Nav.Link>
       </Link>  
       :
       <Link href="/login" passHref>
       <Nav.Link className="ml-3 nav-text" >Login</Nav.Link>
       </Link>
       }
      
      
    </Nav>
     </div>
    
     
    
  </Navbar>

  </>
        
    );
};

export default NavbarComponent;