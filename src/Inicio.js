import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/madrilenalogo.jpg';

function Inicio() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  return (
    <>
      <Navbar className="navbar-black navbar-tall" variant="dark" expand={false}>
        <Container className="d-flex justify-content-between align-items-center">

          {/* Botón hamburguesa a la izquierda */}
          <Navbar.Toggle onClick={handleShow} />

          {/* Logo centrado */}
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

      {/* Menú lateral tipo sidebar */}
      <Offcanvas show={showMenu} onHide={handleClose} placement="start" className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Bienvenido</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white">Menú</Nav.Link>
            <Nav.Link href="#" className="text-white">Contacto</Nav.Link>
            <Nav.Link href="#" className="text-white">Acerca de nosotros</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Contenido principal */}
      <div style={{ padding: '2rem' }}>
        <h1>Página de inicio</h1>
        <p>Contenido por venir...</p>
      </div>
    </>
  );
}

export default Inicio;