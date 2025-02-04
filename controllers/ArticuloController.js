export class ArticuloController {
  constructor(modelo) {
    this.modelo = modelo;
  }

  getAll = async (request, response) => {
    response.json(await this.modelo.getAll());
  }

  getOneBiID = async (request, response) => {
    const id = Number(request.params.id);
    const articulo = await this.modelo.getOneBiID(id);
    if (articulo) {
      response.json(articulo);
    } else {
      response.status(400).end();
    }
  }

  create = async (request, response) => {
    const compra = request.body;
    if (!compra.cliente || !compra.articulos || compra.articulos.length === 0) {
      return response.status(400).json('Validación de datos es Incorrecta');
    }
    const nuevaCompra = await this.modelo.create(compra);
    response.json(nuevaCompra);
  }
}