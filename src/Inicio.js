import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/madrilenalogo.jpg';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import img1 from './assets/madrilena1.webp';
import img2 from './assets/madrilena2.webp';
import img3 from './assets/madrilena3.webp';
import img4 from './assets/madrilena4.webp';
import img5 from './assets/madrilena5.webp';
import { useNavigate } from 'react-router-dom';


function Inicio() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
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
            <Nav.Link href="/menu" className="text-white">Menú</Nav.Link>
            <Nav.Link href="/contacto" className="text-white">Contacto</Nav.Link>          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="inicio-page" style={{ padding: '2rem' }}>
        <h1>La Madrileña</h1>
        <h2>El mejor pastor de la del valle!!</h2>
      </div>
      <Carousel><Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={img1}
      alt="Primera imagen"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={img2}
      alt="Segunda imagen"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={img3}
      alt="Tercera imagen"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>

    <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={img4}
      alt="Cuarta imagen"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>

    <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={img5}
      alt="Quinta imagen"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>

  </Carousel>
<div style={{ textAlign: 'center', marginTop: '2rem' }}>
  <Button
    variant="warning"
    onClick={() => navigate('/contacto')}
  >
    Visítanos
  </Button>
</div>
    </>

  );
}

export default Inicio;