import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/madrilenalogo.jpg';
import menuData from './data/menuData';


function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

   return (
    <>
      <Navbar className="navbar-black navbar-tall" variant="dark" expand={false}>
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Brand href="/" className="mx-auto position-absolute start-50 translate-middle-x">
            <img
              src={logo}
              alt="Logo"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Offcanvas show={showMenu} onHide={handleClose} placement="start" className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Bienvenido</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/inicio" className="text-white">Inicio</Nav.Link>
            <Nav.Link href="/contacto" className="text-white">Contacto</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="menu-page" style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Menú</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {menuData.map((categoria, index) => (
            <div key={index}>
              <h2 style={{ borderBottom: '2px solid black', textAlign: 'center' }}>
                {categoria.categoria}
              </h2>
              {categoria.items.map((item, i) => (
                <div key={i} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                    <span>{item.nombre}</span>
                    <span>{item.precio}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.descripcion}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;