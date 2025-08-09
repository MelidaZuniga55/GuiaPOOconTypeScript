// Clase para representar una cabecera de página web
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "centro"; // Valor por defecto
    }
    // Método para configurar cómo se alinea el título
    CabeceraPagina.prototype.configurarAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Método que muestra todas las propiedades
    CabeceraPagina.prototype.mostrarCabecera = function () {
        console.log("Título:", this.titulo);
        console.log("Color:", this.color);
        console.log("Fuente:", this.fuente);
        console.log("Alineación:", this.alineacion);
    };
    return CabeceraPagina;
}());
// Crear objeto y usar métodos
var cabecera1 = new CabeceraPagina("Mi Página", "Negro", "Arial");
cabecera1.configurarAlineacion("centro");
cabecera1.mostrarCabecera();
