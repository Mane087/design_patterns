// Interfaz base
interface Notificacion {
  enviar(mensaje: string): void;
}

// Componente concreto
class NotificacionBasica implements Notificacion {
  enviar(mensaje: string) {
    console.log(`Notificación básica: ${mensaje}`);
  }
}

// Decorador base
abstract class NotificacionDecorator implements Notificacion {
  constructor(protected envoltorio: Notificacion) {}

  abstract enviar(mensaje: string): void;
}

// Decoradores concretos
class NotificacionEmail extends NotificacionDecorator {
  enviar(mensaje: string) {
    this.envoltorio.enviar(mensaje);
    console.log(`Enviando correo: ${mensaje}`);
  }
}

class NotificacionSMS extends NotificacionDecorator {
  enviar(mensaje: string) {
    this.envoltorio.enviar(mensaje);
    console.log(`Enviando SMS: ${mensaje}`);
  }
}

class NotificacionPush extends NotificacionDecorator {
  enviar(mensaje: string) {
    this.envoltorio.enviar(mensaje);
    console.log(`Enviando notificación push: ${mensaje}`);
  }
}

// Uso
const notificacion = new NotificacionPush(
  new NotificacionSMS(new NotificacionEmail(new NotificacionBasica()))
);

notificacion.enviar("Tienes una nueva alerta importante");
