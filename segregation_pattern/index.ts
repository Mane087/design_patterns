interface Animal {
  eat(): void;
  sleep(): void;
}

interface canWalk {
  walk(distance: number): void;
  run(distance: number): void;
}

interface canSwim {
  swim(distance: number): void;
}

class Dog implements Animal{
    eat() {
        console.log('Dog is eating');
    }
    sleep() {
        console.log('Dog is sleeping');
    }
    walk(distance: number) {
        console.log('Dog is walking');
    }
    run(distance: number) {
        console.log('Dog is running');
    }
    swim(distance: number) {
        console.log('Dog is swimming');
    }
}

class Fish implements Animal, canSwim {
    eat() {
        console.log('Fish is eating');
    }
    sleep() {
        console.log('Fish is sleeping');
    }
    swim(distance: number) {
        console.log('Fish is swimming');
    }
}
