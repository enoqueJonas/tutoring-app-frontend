import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/tutories/tutoriesSlice';

import './sidebar.css';

function SideBar() {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState('');
  const { loggedIn } = useSelector((state) => state.tutories.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Navbar bg="light" expand="lg" className="sidenav d-grid ">
      <Container className="nav-container nav-color p-0  h-100">
        <Navbar.Brand href="#home" className="h1 p-1">Tutoring</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-2" />
        <Navbar.Collapse id="basic-navbar-nav " style={{ width: '15vw' }}>
          <Nav className="flex-column p-0 d-flex justify-content-center" style={{ width: '100%' }}>
            <Link className={`nav-link-item ${activeItem === 'home' ? 'active' : ''}`} to="home" onClick={() => setActiveItem('home')}>Home</Link>
            <Link className={`nav-link-item ${activeItem === 'reservation' ? 'active' : ''}`} to="reservation" onClick={() => setActiveItem('reservation')}>Reservations</Link>
            <Link className={`nav-link-item ${activeItem === 'myReservations' ? 'active' : ''}`} to="myReservations" onClick={() => setActiveItem('myReservations')}>My Reservations</Link>
            <Link className={`nav-link-item ${activeItem === 'addClass' ? 'active' : ''}`} to="addClass" onClick={() => setActiveItem('addClass')}>Add Class</Link>
            <Link className={`nav-link-item ${activeItem === 'deleteClass' ? 'active' : ''}`} to="deleteClass" onClick={() => setActiveItem('deleteClass')}>Delete Class</Link>
            {loggedIn && (
              <button className="nav-link-item logout-button" onClick={handleLogout}>
                Logout
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SideBar;
