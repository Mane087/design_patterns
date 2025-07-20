namespace Prototype {
  // Interfaz para el prototipo
  interface DesignPrototype {
    clone(): DesignPrototype;
  }

  // Clase concreta
  class PosterDesign implements DesignPrototype {
    constructor(
      public title: string,
      public backgroundColor: string,
      public font: string,
      public elements: string[]
    ) {}

    clone(): PosterDesign {
      // Clon profundo para evitar que se compartan referencias
      return new PosterDesign(this.title, this.backgroundColor, this.font, [
        ...this.elements,
      ]);
    }

    show() {
      console.log(`Título: ${this.title}`);
      console.log(`Fondo: ${this.backgroundColor}`);
      console.log(`Fuente: ${this.font}`);
      console.log(`Elementos: ${this.elements.join(", ")}`);
    }
  }

  // Uso
  const originalTemplate = new PosterDesign(
    "Plantilla Fiesta",
    "Azul",
    "Comic Sans",
    ["Imagen de fondo", "Texto central", "Logo"]
  );

  const clonedDesign = originalTemplate.clone();
  clonedDesign.title = "Flyer Fiesta de Juan";
  clonedDesign.elements.push("Código QR");

  console.log("== Plantilla original ==");
  originalTemplate.show();

  console.log("\n== Diseño clonado y personalizado ==");
  clonedDesign.show();
}
