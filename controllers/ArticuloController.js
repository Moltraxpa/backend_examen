export class ArticuloController{
    constructor (modelo){
        this.modelo = modelo;
    }
    getAll=async(request,response)=>{
    
        response.json( await this.modelo.getAll());
    }
    getOneBiID=async(request,response)=>{
        const id=Number(request.params.id);
        const articulo= await this.modelo.getOneBiID(id);
        if (articulo){
             response.json(articulo);
          }
        else{
          response.status(400).end();
       }
        
    }
    
  create=async(request,response)=> {
  const articulo=request.body;
   if (articulo.error){
     return response.status (400).json('Validación de datos es Incorrecta');
   }
   const nuevoArticulo=await this.modelo.create(articulo);
   response.json(nuevoArticulo); 
  }

}
