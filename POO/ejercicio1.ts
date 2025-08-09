// Clase para representar una cabecera de página web
class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: "izquierda" | "centro" | "derecha";

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "centro"; // Valor por defecto
    }

    // Método para configurar cómo se alinea el título
    configurarAlineacion(alineacion: "izquierda" | "centro" | "derecha"): void {
        this.alineacion = alineacion;
    }

    // Método que muestra todas las propiedades
    mostrarCabecera(): void {
        console.log("Título:",this.titulo);
        console.log("Color:", this.color);
        console.log("Fuente:", this.fuente);
        console.log("Alineación:", this.alineacion);
    }
}

// Crear objeto y usar métodos
const cabecera1 = new CabeceraPagina("Mi Página", "Negro", "Arial");
cabecera1.configurarAlineacion("derecha");
cabecera1.mostrarCabecera();
