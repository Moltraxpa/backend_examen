import { articulos } from "../datos/articulos.js";
let articulosDevolver = articulos;

export class Articulo {
  static getAll() {
    return articulosDevolver;
  }

  static getOneBiID(id) {
    return articulosDevolver.find(articulo => articulo.id == id);
  }

  static create(articulo) {
    const nuevoArticulo = {
      id: articulo.id,
      nombre: articulo.nombre,
      precio: articulo.precio
    };

    articulosDevolver = [...articulosDevolver, nuevoArticulo];
    return nuevoArticulo;
  }
}