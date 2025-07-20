# Escenario: Aplicación de pagos en línea
Supongamos que estás desarrollando una plataforma de e-commerce que acepta diferentes métodos de pago: tarjeta de crédito, PayPal, y criptomonedas. Cada tipo de pago tiene su propia lógica para procesar una transacción.

## 🎯 Problema:
No quieres acoplar directamente tu código a una clase específica de pago, ya que podrían agregarse más métodos en el futuro o cambiar su lógica.

## ✅ Solución:
Utilizas el patrón Factory para centralizar la creación de objetos de pago según el tipo seleccionado por el usuario.

## 🔧 Código en TypeScript (por ejemplo):
```ts
// Interface común para todos los métodos de pago
interface PaymentMethod {
  processPayment(amount: number): void;
}

// Implementaciones concretas
class CreditCardPayment implements PaymentMethod {
  processPayment(amount: number) {
    console.log(`Procesando pago de $${amount} con tarjeta de crédito.`);
  }
}

class PayPalPayment implements PaymentMethod {
  processPayment(amount: number) {
    console.log(`Procesando pago de $${amount} con PayPal.`);
  }
}

class CryptoPayment implements PaymentMethod {
  processPayment(amount: number) {
    console.log(`Procesando pago de $${amount} con criptomonedas.`);
  }
}

// Factory
class PaymentFactory {
  static createPayment(method: string): PaymentMethod {
    switch (method) {
      case 'credit':
        return new CreditCardPayment();
      case 'paypal':
        return new PayPalPayment();
      case 'crypto':
        return new CryptoPayment();
      default:
        throw new Error('Método de pago no soportado');
    }
  }
}

// Uso
const userSelectedMethod = 'paypal';
const payment = PaymentFactory.createPayment(userSelectedMethod);
payment.processPayment(150);
```

## 🧠 Ventajas del patrón Factory en este caso:

    Permite agregar nuevos métodos de pago sin modificar el código cliente.

    Mejora la escalabilidad y mantenimiento del sistema.

    Facilita pruebas unitarias al desacoplar la creación del objeto de su uso.