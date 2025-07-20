# 🧾 Escenario: Gestión centralizada de configuración en una aplicación
Supón que estás desarrollando una aplicación que necesita acceder frecuentemente a su configuración global (por ejemplo, idioma, modo oscuro, API key, rutas base). Esta configuración debe ser única en toda la aplicación y estar disponible en cualquier parte del código.

## 🎯 Problema:
Si creas múltiples instancias de la clase de configuración, puedes tener valores inconsistentes en distintas partes de la app. Además, controlar manualmente que solo haya una instancia es propenso a errores.

## ✅ Solución:
Aplicar el patrón Singleton para garantizar que solo exista una única instancia global de la configuración en toda la aplicación y que sea fácilmente accesible desde cualquier módulo.

## 🧠 Ventajas del patrón Singleton en este caso:

    Garantiza una única fuente de verdad para datos globales o compartidos.

    Facilita el acceso controlado a recursos que deben mantenerse únicos (configuración, logger, conexión a base de datos).

    Reduce el riesgo de inconsistencias y duplicación de estados en la aplicación.

    Puede incluir lógica de inicialización perezosa (lazy loading), como en el ejemplo.