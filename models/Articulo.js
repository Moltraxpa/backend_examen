import { articulos } from "../datos/articulos.js";
let compras = [];

export class Articulo {
  static getAll() {
    return articulos;
  }

  static getOneBiID(id) {
    return articulos.find(articulo => articulo.id == id);
  }

  static create(compra) {
    const nuevaCompra = {
      cliente: compra.cliente,
      articulos: compra.articulos,
      total: compra.total
    };

    compras = [...compras, nuevaCompra];
    return nuevaCompra;
  }
}