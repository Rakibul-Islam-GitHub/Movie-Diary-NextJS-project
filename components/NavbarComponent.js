import { Navbar, Nav} from 'react-bootstrap';
import Link from 'next/link'

const NavbarComponent = () => {
    return (
        <>
       
    <Navbar  variant="dark" style={{padding:'20px', backgroundColor:'#0f494e'}}>
    
     <div className='container'>

     <Link href="/" passHref>
     <Navbar.Brand className='logo'>Movie Diary</Navbar.Brand>

       </Link>
     
    <Nav className="ml-auto ">
      <Link href="/" passHref>
      <Nav.Link className='nav-text' >All Reviews</Nav.Link>
      </Link>
       <Link href="/add-review" passHref>
       <Nav.Link className="ml-3 nav-text" >Add New</Nav.Link>
       </Link>
      
      
    </Nav>
     </div>
    
     
    
  </Navbar>

  </>
        
    );
};

export default NavbarComponent;