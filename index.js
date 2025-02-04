import express from "express";
import cors from "cors";
import { articuloRouter } from "./routes/articuloRoutes.js";

const app = express();
app.use(express.json());
const PORT = 3030;
app.use(
  cors({
      origin: 
    //   "http://localhost:5173",
     "https://examen-frontend-puce.vercel.app",

  })
);

app.use('/api/articulos', articuloRouter);

// app.listen(PORT, () => {
//   console.log("Servidor a la espera en el puerto " + PORT);
// }); 

export default app;