# 🧾 Escenario: Sistema de notificaciones personalizables
Imagina que estás desarrollando un sistema de notificaciones para una aplicación empresarial. Por defecto, todas las notificaciones se envían por consola, pero algunos usuarios premium pueden querer notificaciones por correo electrónico, SMS, o incluso mensajes push, además de la notificación estándar.

## 🎯 Problema:
No quieres crear una nueva clase para cada combinación de métodos de notificación (por ejemplo, NotificacionPorCorreoYConsola, NotificacionPorSMSYCorreo, etc.), porque esto generaría una explosión de clases innecesaria y difícil de mantener.

## ✅ Solución:
Aplicar el patrón Decorator para añadir de forma dinámica funcionalidades extra (como correo, SMS, push) a una notificación base, sin modificar su estructura original.

## 🧠 Ventajas del patrón Decorator en este caso:

    Permite agregar funcionalidades adicionales de forma dinámica sin modificar las clases originales.

    Evita la creación de múltiples subclases para cada combinación posible.

    Fomenta el principio de abierto/cerrado (Open/Closed) al permitir extender el comportamiento sin alterar el código existente.

    Mejora la flexibilidad y reutilización de componentes.