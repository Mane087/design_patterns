# 🧾 Escenario: Interfaz multiplataforma para una aplicación
Imagina que estás desarrollando una aplicación de escritorio multiplataforma (Windows, macOS y Linux). Cada sistema operativo tiene estilos diferentes de botones, menús y ventanas. Quieres mantener una experiencia nativa en cada sistema sin duplicar toda la lógica de interfaz.

## 🎯 Problema:
Si intentas manejar todos los estilos y comportamientos de cada sistema operativo en el mismo código, se volverá complejo y difícil de mantener. Además, necesitas asegurarte de que los componentes de una misma familia (botón, menú, ventana) sean compatibles entre sí para cada plataforma.

## ✅ Solución:
Aplicar el patrón Abstract Factory para crear familias de objetos relacionados (como Botón, Ventana, Menú) sin especificar sus clases concretas. Cada familia representa una plataforma (Windows, macOS, Linux).

## 🔧 Código en TypeScript:
```ts
// Interfaces de productos
interface Boton {
  render(): void;
}

interface Ventana {
  open(): void;
}

// Fábrica abstracta
interface UIFactory {
  createBoton(): Boton;
  createVentana(): Ventana;
}

// Productos concretos para Windows
class BotonWindows implements Boton {
  render() {
    console.log("Renderizando botón estilo Windows");
  }
}

class VentanaWindows implements Ventana {
  open() {
    console.log("Abriendo ventana estilo Windows");
  }
}

// Productos concretos para macOS
class BotonMac implements Boton {
  render() {
    console.log("Renderizando botón estilo macOS");
  }
}

class VentanaMac implements Ventana {
  open() {
    console.log("Abriendo ventana estilo macOS");
  }
}

// Fábricas concretas
class WindowsFactory implements UIFactory {
  createBoton(): Boton {
    return new BotonWindows();
  }

  createVentana(): Ventana {
    return new VentanaWindows();
  }
}

class MacFactory implements UIFactory {
  createBoton(): Boton {
    return new BotonMac();
  }

  createVentana(): Ventana {
    return new VentanaMac();
  }
}

// Uso del cliente
function renderizarInterfaz(factory: UIFactory) {
  const boton = factory.createBoton();
  const ventana = factory.createVentana();

  boton.render();
  ventana.open();
}

// Simulación: el sistema detecta la plataforma actual
const sistemaOperativo = "mac"; // Puede ser "windows" o "mac"

const fabrica = sistemaOperativo === "windows"
  ? new WindowsFactory()
  : new MacFactory();

renderizarInterfaz(fabrica);
```

## 🧠 Ventajas del patrón Abstract Factory en este caso:

    Garantiza la compatibilidad entre productos de una misma familia (por ejemplo, botón y ventana estilo mac).

    Facilita el soporte de nuevas plataformas añadiendo nuevas fábricas sin alterar el código cliente.

    Mejora la escalabilidad y organización del código en sistemas complejos.

    Promueve el principio de inversión de dependencias, donde el código depende de abstracciones y no de implementaciones concretas.