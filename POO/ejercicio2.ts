class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) throw new Error("División por cero no permitida");
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    
    factorial(n: number): number {
        if (n < 0) return NaN;
        let resultado = 1;
        for (let i = 2; i <= n; i++) resultado *= i;
        return resultado;
    }
}

// Crear objeto y probar métodos
const calc = new Calculadora();
console.log("Suma:", calc.sumar(4, 6));
console.log("Factorial:", calc.factorial(5));
 