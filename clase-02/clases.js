 class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

   getFullName(){
        return `Nombre: ${this.nombre} Apellido: ${this.apellido}`
    }
    addMascotas(){
        return`${this.mascotas.push('Hamster','caballo')}`
    }
    countMascotas(){
        return`${this.mascotas.length}`
    }
    addBook(){
        return`${this.libros.push({ nombre: 'Narnia', autor: 'William Golding' })}`
    }
    getBookNames(){
        return this.libros.map(n => n.nombre)
    }


}


const usuario1= new Usuario('Luciano','Roagna',[{nombre:'El señor de las moscas',autor:'William Golding'},{nombre:'Fundacion',autor:'Isaac Asimov'}],['perro','gato'])
 console.log(usuario1)
console.log(usuario1.getFullName())
console.log(usuario1.addMascotas())
console.log(usuario1) 
console.log(usuario1.countMascotas())
console.log(usuario1.addBook())
console.log(usuario1)
console.log(usuario1.getBookNames())
 









 /*  class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }

    getFullName() {
        return `Nombre: ${this.nombre}. Apellido: ${this.apellido}`
    }

    addMascota() {
        return `${this.mascotas.push("caballo")}`
    }
    countMascotas() {
        return `Cantidad de mascotas:${this.mascotas.length}`
    }

    addBook() {
        return `${this.libros.push([{ nombre: 'Narnia', autor: 'William Golding' }])}`
    }

    getBookNames() {
        return this.libros.map((libro) => libro.nombre)


    }

}


const usuario = new Usuario("Luciano", "Roagna", [{ nombre: 'El señor de las moscas', autor: 'William Golding' }, { nombre: 'Fundacion', autor: 'Isaac Asimov' }], ['perro', 'gato'])
console.log(usuario)
console.log(usuario.getFullName())
console.log(usuario.addMascota())
console.log(usuario.countMascotas())
console.log(usuario.addBook())
console.log(usuario.getBookNames())
 
 */