var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "centro"; // Valor por defecto
    }
    // Primer método: obtener título, color y fuente
    CabeceraPagina.prototype.obtenerDatos = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    };
    // Segundo método: configurar alineación
    CabeceraPagina.prototype.configurarAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Tercer método: imprimir todas las propiedades
    CabeceraPagina.prototype.mostrarCabecera = function () {
        var datos = this.obtenerDatos();
        console.log("Título:", datos.titulo);
        console.log("Color:", datos.color);
        console.log("Fuente:", datos.fuente);
        console.log("Alineación:", this.alineacion);
    };
    return CabeceraPagina;
}());
// Crear objeto y usar métodos
var cabecera1 = new CabeceraPagina("Mi Página", "Negro", "Arial");
cabecera1.configurarAlineacion("derecha");
cabecera1.mostrarCabecera();
