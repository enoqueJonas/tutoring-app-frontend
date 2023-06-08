import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './sidebar.css';

function SideBar() {
  return (
    <Navbar bg="light" expand="lg" className="nav-width d-grid">
      <Container className="flex-column nav-color p-0 w-100 ">
        <Navbar.Brand href="#home">Tutoring classes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " style={{ width: '100%' }}>
          <Nav className="me-auto flex-column side-nav p-0 d-flex justify-content-center" style={{ width: '100%' }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Reservations</Nav.Link>
            <Nav.Link href="#link">My Reservations</Nav.Link>
            <Nav.Link href="#link">Add Class</Nav.Link>
            <Nav.Link href="#link">Delete Class</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SideBar;
