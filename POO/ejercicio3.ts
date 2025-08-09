class Cancion {
    private titulo: string;
    private genero: string;
    private autor: string;

    constructor(tituloParam: string, generoParam: string) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = "Desconocido"; 
    }

    // Get y Set para autor

    getAutor(): string {
        return this.autor;
    }

    setAutor(autorParam: string): void {
        this.autor = autorParam;
    }


    // Mostrar datos
    mostrarDatos(): void {
        console.log("Titulo:", this.titulo);
        console.log("Genero:", this.genero);
        console.log("Autor:", this.autor);
    }
}

// Crear objeto
const cancion1 = new Cancion("Viento", "Rock alternativo");
cancion1.setAutor("Caifanes");
cancion1.mostrarDatos();
