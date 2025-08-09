var Cuenta = /** @class */ (function () {
    function Cuenta(nombreParam, cantidadParam, tipoParam, numeroParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoParam;
        this.numeroCuenta = numeroParam;
    }
    // Método para depositar
    Cuenta.prototype.depositar = function (monto) {
        if (monto < 5) {
            console.log("El depósito debe ser mayor a $5.00");
        }
        else {
            this.cantidad += monto; // Suma el monto al saldo
            console.log("Dep\u00F3sito exitoso: $".concat(monto, ". Saldo actual: $").concat(this.cantidad));
        }
    };
    // Método para retirar
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad <= 0) {
            console.log("No hay saldo disponible en la cuenta");
        }
        else if (valor < 5) {
            console.log("No se pueden retirar menos de $5.00");
        }
        else if (valor > this.cantidad) {
            console.log("Fondos insuficientes");
        }
        else {
            this.cantidad -= valor;
            console.log("Retiro exitoso: $".concat(valor, ". Saldo restante: $").concat(this.cantidad));
        }
    };
    // Mostrar datos
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre:", this.nombre);
        console.log("Tipo de cuenta:", this.tipoCuenta);
        console.log("Número de cuenta:", this.numeroCuenta);
    };
    return Cuenta;
}());
// Crear objeto
var cuenta1 = new Cuenta("Andrea López", 100, "Ahorro", "1020304050");
cuenta1.depositar(50); // Deposita $50
cuenta1.retirar(20); // Retira $20
cuenta1.mostrarDatos();
