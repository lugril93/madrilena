// src/data/menuData.js

const menuData = [
  {
    categoria: "TACOS",
    items: [
      { nombre: "Taco de Pastor", descripcion: "El tradicional, receta de la casa.", precio: "$28" },
      { nombre: "Taco de Suadero", descripcion: "Suave carne de res cocinada durante horas para lograr esa textura deliciosa", precio: "$28" },
      { nombre: "Taco de Bisteck", descripcion: "Deliciosa sabana de res a la parrilla", precio: "$65" },
      { nombre: "Taco de Chuleta", descripcion: "Jugosa chuleta de cerdo a la parrilla", precio: "$65" },
      { nombre: "Taco Habanero Especial", descripcion: "Proteina sobre una cama de chicharron de queso y habanero toreado", precio: "$90" },
      { nombre: "Con queso", descripcion: "Queso gouda fundido", precio: "+$15" }
    ]
  },
  {
    categoria: "TORTAS",
    items: [
      { nombre: "Pastor", descripcion: "La famosa de la casa", precio: "$90" },
      { nombre: "Bisteck", descripcion: "Sabana de res, jitomate, cebolla y aguacate", precio: "$90" },
      { nombre: "Milanesa", descripcion: "Milanesa de res empanizada, jitomate, cebolla y aguacate", precio: "$95" },
      { nombre: "Jamón", descripcion: "Clasica con queso, jitomate, cebolla y aguacate", precio: "$80" },
      { nombre: "Cubana", descripcion: "Milanesa, jamón y queso", precio: "$115" }
    ]
  },
  {
    categoria: "ALAMBRES",
    items: [
      { nombre: "Pastor", descripcion: "Pimiento, cebolla y tocino", precio: "$110" },
      { nombre: "Bisteck", descripcion: "Pimiento, cebolla y tocino", precio: "$110" },
      { nombre: "Suadero", descripcion: "Pimiento, cebolla y tocino", precio: "$110" },
      { nombre: "Chuleta", descripcion: "Pimiento, cebolla y tocino", precio: "$110" },
      { nombre: "Arrachera", descripcion: "Pimiento, cebolla y tocino", precio: "$130" },
      { nombre: "Con queso", descripcion: "Queso gouda fundido", precio: "+$25" }
    ]
  },
  {
    categoria: "BEBIDAS",
    items: [
      { nombre: "Refrescos", descripcion: "Coca, Coca sin azucar, Boing", precio: "$35" },
      { nombre: "Cervezas", descripcion: "XX Lager, Indio, Tecate", precio: "$45" },
      { nombre: "Michelada", descripcion: "Limón y sal", precio: "$50" },
      { nombre: "Chelato", descripcion: "Clamato preparado", precio: "$60" },
      { nombre: "Café", descripcion: "Americano o capuchino", precio: "$50" }
    ]
  }
];

export default menuData;
