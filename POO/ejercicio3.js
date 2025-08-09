var Cancion = /** @class */ (function () {
    function Cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = "Desconocido";
    }
    // Get y Set para autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    // Mostrar datos
    Cancion.prototype.mostrarDatos = function () {
        console.log("Titulo:", this.titulo);
        console.log("Genero:", this.genero);
        console.log("Autor:", this.autor);
    };
    return Cancion;
}());
// Crear objeto
var cancion1 = new Cancion("Viento", "Rock alternativo");
cancion1.setAutor("Caifanes");
cancion1.mostrarDatos();
