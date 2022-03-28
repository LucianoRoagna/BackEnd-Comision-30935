
const fs = require('fs').promises;

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
        this.products = [];
    }
    async save(newObj){
        // .Recibe un objeto, lo guarda en el archivo productos, devuelve el id asignado.
       
        try{

            let file = await fs.readFile(this.fileName, "utf8");
            let json = JSON.parse(file);
            //agregar id al objeto nuevo que se va a guardar
            newObj.id = json.length + 1;
            json.push(newObj);
      
            let jsonString = JSON.stringify(json);
            await fs.writeFile(this.fileName, jsonString);
            return console.log(jsonString);
        }

        catch(error){
            console.log(error);
        }

    }
   

  async getById(id){

    //Recibe un id y devuelve el objeto con ese id o null si no existe
      try{
          let file = await fs.readFile(this.fileName,'utf8');
          let json = JSON.parse(file);
          let product = json.find(product => product.id == id);
          return console.log(product);
      }
      catch{
          return null
      }
  }
  async getAll(){
      //Devuelve un array con todos los objetos del archivo
      try{
          let file = await fs.readFile(this.fileName,'utf8');
          let json = JSON.parse(file)
          this.products=json;
          return console.log(this.products)
      }
      catch(err){
          console.log(err)
      }
  }

  async deleteById(){
      //Elimina un objeto mediante su ID
      try{
        let file = await fs.readFile(this.fileName,'utf8');
        let json = JSON.parse(file)
        let product=json.filter(product =>product.id != id);
        this.products =product;
       let jsonString =JSON.stringify(product);
       fs.writeFile(this.fileName,jsonString);
      }
      catch(err){
          console.log(err)
      }
  }
async deleteAll(){
    //Elimina todos los objetos del archivo
    try{
        let product=[];
        this.products = product;
        let jsonString =JSON.stringify(product);
        fs.writeFile(this.fileName,jsonString);
    }
    catch(err){
        console.log(err)
    }
}
}



module.exports =Contenedor;
   