# 🧾 Escenario: Sistema de diseño gráfico con plantillas
Imagina que estás desarrollando una aplicación de diseño, como un editor de flyers o posters. Los usuarios pueden crear nuevos diseños a partir de plantillas existentes (colores, fuentes, posiciones de elementos, etc.), y luego modificarlos.

## 🎯 Problema:
Cada vez que el usuario quiere partir de una plantilla, no quieres reconstruir manualmente todos los elementos del diseño desde cero. Eso sería costoso en tiempo y código.

## ✅ Solución:
Aplicar el patrón Prototype para clonar una plantilla existente, obteniendo una copia exacta que luego se puede modificar sin afectar el original.

## 🧠 Ventajas del patrón Prototype en este caso:

    Permite clonar objetos complejos de forma eficiente.

    Evita la creación costosa o repetitiva de objetos similares.

    Desacopla la lógica de construcción del cliente que usa el objeto.