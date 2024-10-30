import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png'


export default function AppHeader (){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <div className="d-flex flex-column align-items-center">
              <img src={logo} alt="Brand Logo" style={{ width: '50px', height: '50px' }} />
              <span className="text-center">EXTRACT</span> 
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-item me-auto">
              <Nav.Link className="active" href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#skincare">Skin Care</Nav.Link>
              <Nav.Link href="#reviews">Reviews</Nav.Link>
              <Nav.Link href="#haircare">Hair Care</Nav.Link>
              <Nav.Link href="#productlist">Best Seller</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>

              <Nav.Link href="#contact">Contact</Nav.Link>
             
              
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}