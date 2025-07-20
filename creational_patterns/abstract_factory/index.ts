namespace AbstractFactoryMethod {
    interface Mueble {
      create(forma: string, acabado: string, precio: number): void;
    }
  
    class Silla implements Mueble {
      create(forma: string, acabado: string, precio: number): void {
        console.log(
          "Silla con forma:",
          forma,
          ", acabado:",
          acabado,
          ", precio: $",
          precio
        );
      }
    }
  
    class Mesa implements Mueble {
      create(forma: string, acabado: string, precio: number): void {
        console.log(
          "Mesa con forma:",
          forma,
          ", acabado:",
          acabado,
          ", precio: $",
          precio
        );
      }
    }
  
    const TipoMueble = {
      Silla: Silla,
      Mesa: Mesa,
    } as const;
  
  
    class SillasDePino extends Silla {
      create(forma: string, acabado: string, precio: number): void {
        console.log(
          "Silla de pino con forma:",
          forma,
          ", acabado:",
          acabado,
          ", precio: $",
          precio
        );
      }
    }
  
    class MesasDePino extends Mesa {
      create(forma: string, acabado: string, precio: number): void {
        console.log(
          "Mesa de pino con forma:",
          forma,
          ", acabado:",
          acabado,
          ", precio: $",
          precio
        );
      }
    }
  
    interface MuebleFactoryAbstract {
      createSilla(): Silla;
      createMesa(): Mesa;
    }
  
    class MuebleFactoryPino implements MuebleFactoryAbstract {
      createSilla(): Silla {
        return new SillasDePino();
      }
  
      createMesa(): Mesa {
        return new MesasDePino();
      }
    }
  
    const muebleFactoryPino = new MuebleFactoryPino();
    const sillaPino = muebleFactoryPino.createSilla();
    sillaPino.create("Cuadrada", "Madera", 150);
  }
  