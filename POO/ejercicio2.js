var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0)
            throw new Error("División por cero no permitida");
        return a / b;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (n) {
        if (n < 0)
            return NaN;
        var resultado = 1;
        for (var i = 2; i <= n; i++)
            resultado *= i;
        return resultado;
    };
    return Calculadora;
}());
// Crear objeto y probar métodos
var calc = new Calculadora();
console.log("Suma:", calc.sumar(4, 6));
console.log("Factorial:", calc.factorial(5));
