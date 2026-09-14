
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navexample() {
  return (
    <Navbar expand="lg" sticky='top' style={{background: '#2c3e50'}}
    className='py-2' >
      <Container className='px-5 d-flex justify-content-between'>
        <Navbar.Brand className="text-light" href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-light" href="#Portfolio">Products</Nav.Link>
           <Nav.Link className="text-light" href="#About">About</Nav.Link>
           <Nav.Link className="text-light" href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navexample;