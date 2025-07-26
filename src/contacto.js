import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/madrilenalogo.jpg';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
import trompoImg from './assets/madris.jpg';




function Contacto() {
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
            <Nav.Link href="/menu" className="text-white">Menú</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="contacto-background" style={{minHeight:'100vh', padding: '2rem' }}>
        <Card style={{ width: '100%', maxWidth: '500px', margin: '2rem auto' }}>
            <Card.Img variant="top" src={trompoImg} alt="trompo" />
  <Card.Body>
    <Card.Title><h1>Contáctanos</h1></Card.Title>
    <Card.Text>
      <strong>Dirección:</strong> Pilares #428, Colonia del Valle Centro, Benito Juárez, CDMX 03100<br />
      <strong>Teléfono:</strong> (55) 5605 6757<br />
    </Card.Text>
    <Card.Link href="https://www.google.com/maps/place/La+Madrile%C3%B1a/@19.3779156,-99.168003,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ffa23b050fc5:0xa86228278f831125!8m2!3d19.3779106!4d-99.1654281!16s%2Fg%2F1ptydl4n6?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
      Ver en Google Maps
    </Card.Link>
    <div style={{ marginTop: '1rem' }}>
  <a
    href="https://www.instagram.com/la_madrilena_cdmx/?igsh=MW4xaHl6aTg3dDN2NQ%3D%3D#"
    target="_blank"
    rel="noopener noreferrer"
    style={{ marginRight: '1rem', color: '#E1306C', textDecoration: 'none', fontSize: '1.5rem' }}
  >
    <i className="bi bi-instagram"></i>
  </a>
  <a
    href="https://www.facebook.com/LaMadrilena.DelValle?mibextid=wwXIfr&rdid=FLrlY85K0fegXKxO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Vxhmk7TmQ%2F%3Fmibextid%3DwwXIfr#"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#3b5998', textDecoration: 'none', fontSize: '1.5rem' }}
  >
    <i className="bi bi-facebook"></i>
  </a>
</div>
  </Card.Body>
</Card>
      </div>
    </>
  );
}

export default Contacto;
