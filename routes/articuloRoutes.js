import { Router } from "express";
import { ArticuloController } from "../controllers/ArticuloController.js";
import { Articulo } from "../models/Articulo.js";

const articuloController = new ArticuloController(Articulo);

export const articuloRouter = Router();

articuloRouter.get('/', articuloController.getAll);
articuloRouter.get('/:id', articuloController.getOneBiID);
articuloRouter.post('/', articuloController.create);
