// Clase abstracta
abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    verificarEdad(): void {
        if (this.edad >= 18) {
            console.log("Es mayor de edad");
        } else {
            console.log("Es menor de edad");
        }
    }

    // Método abstracto
    abstract mostrarDatos(): void;
}

// Empleado hereda de Persona
class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldoParam: number): void {
        this.sueldo = sueldoParam;
    }

    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    mostrarDatos(): void {
        console.log("Nombre:",this.nombre, this.apellido);
        console.log("Dirección:",this.direccion);
        console.log("Teléfono:",this.telefono);
        console.log("Edad:",this.edad);
        console.log("Sueldo:", this.sueldo); 

    }
}

// Crear objeto
const empleado1 = new Empleado("Carlos", "Mendoza", "La Libertad", "77889900", 30, 850);
empleado1.mostrarDatos();
empleado1.verificarEdad();
empleado1.imprimirSueldo();
