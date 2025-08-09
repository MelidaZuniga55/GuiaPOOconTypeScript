var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase abstracta
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.verificarEdad = function () {
        if (this.edad >= 18) {
            console.log("Es mayor de edad");
        }
        else {
            console.log("Es menor de edad");
        }
    };
    return Persona;
}());
// Empleado hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (sueldoParam) {
        this.sueldo = sueldoParam;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log("Sueldo: $".concat(this.sueldo));
    };
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre:", this.nombre, this.apellido);
        console.log("Dirección:", this.direccion);
        console.log("Teléfono:", this.telefono);
        console.log("Edad:", this.edad);
        console.log("Sueldo:", this.sueldo);
    };
    return Empleado;
}(Persona));
// Crear objeto
var empleado1 = new Empleado("Carlos", "Mendoza", "La Libertad", "77889900", 30, 850);
empleado1.mostrarDatos();
empleado1.verificarEdad();
empleado1.imprimirSueldo();
