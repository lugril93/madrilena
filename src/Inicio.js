import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/madrilenalogo.jpg';

const menuData = [
  {
    categoria: "TACOS",
    items: [
      { nombre: "Edamame salad", descripcion: "Edamame, greens, chili oil", precio: "$9" },
      { nombre: "Tuna tartare tacos", descripcion: "Tuna, avocado, sriracha", precio: "$19" },
      { nombre: "Crispy Tempura Veggies", descripcion: "Tempura veggies, chili", precio: "$12" },
      { nombre: "Sakura Spring Rolls", descripcion: "Rice paper, hoisin", precio: "$13" },
      { nombre: "Seared Scallop Carpaccio", descripcion: "Citrus soy scallops", precio: "$20" },
    ],
  },
  {
    categoria: "TORTAS",
    items: [
      { nombre: "Bao Bun Sliders", descripcion: "Short rib, gochujang mayo", precio: "$9" },
      { nombre: "Truffle Shiitake Dim Sum", descripcion: "Mushrooms, truffle oil", precio: "$11" },
      { nombre: "Peking Duck Bao", descripcion: "Duck, hoisin, cucumber", precio: "$18" },
      { nombre: "Shrimp Har Gow", descripcion: "Vermicelli, hoisin", precio: "$16" },
      { nombre: "Veggie Bao Trio", descripcion: "Tofu, mushroom, eggplant", precio: "$15" },
    ],
  },
  {
    categoria: "ALAMBRES",
    items: [
      { nombre: "Truffle mushroom", descripcion: "Shiitake, truffle salt", precio: "$19" },
      { nombre: "Wagyu Beef Tataki", descripcion: "Ponzu sauce, scallions", precio: "$24" },
      { nombre: "Grilled Unagi", descripcion: "Avocado, eel sauce", precio: "$20" },
      { nombre: "Tempura Sweet Potato", descripcion: "Chives, wasabi mayo", precio: "$13" },
      { nombre: "Mango Tango", descripcion: "Mango, mint glaze", precio: "$13" },
    ],
  },
  {
    categoria: "BEBIDAS",
    items: [
      { nombre: "Inferno Serpent", descripcion: "Tuna, unagi, avocado", precio: "$21" },
      { nombre: "Rainbow", descripcion: "Carrot, mango, pepper", precio: "$19" },
      { nombre: "Volcano", descripcion: "Spicy crab mix, wasabi", precio: "$24" },
      { nombre: "Surf & Turf", descripcion: "Filet mignon, shrimp", precio: "$28" },
      { nombre: "Green Goddess", descripcion: "Spinach, wasabi aioli", precio: "$20" },
    ],
  },
];

function Inicio() {
  const [showMenu, setShowMenu] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);

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
          <Nav.Link
  onClick={() => {
    setMostrarMenu(true);
    handleClose(); 
  }}
  className="text-white"
>
  Menú
</Nav.Link>

            <Nav.Link href="#" className="text-white">Contacto</Nav.Link>
            <Nav.Link href="#" className="text-white">Acerca de nosotros</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Contenido principal */}
      <div style={{ padding: '2rem' }}>
  {mostrarMenu ? (
    <>
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
    </>
  ) : (
    <>
      <h1>Página de inicio</h1>
      <p>Contenido por venir...</p>
    </>
  )}
</div>

    </>
  );
}

export default Inicio;