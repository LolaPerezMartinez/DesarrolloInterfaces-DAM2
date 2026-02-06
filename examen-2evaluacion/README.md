# Aplicación de Personajes de Star Wars

## ¿Qué hace esta aplicación?

Esta aplicación te permite explorar información sobre los personajes del universo Star Wars. Puedes ver un listado completo de personajes y, al seleccionar uno, conocer detalles como su altura, peso, color de pelo, color de ojos, género y mundo natal.

---

## ¿Cómo funciona?

La aplicación se conecta automáticamente a una base de datos pública (API) que contiene información actualizada de personajes de Star Wars. No necesitas hacer nada especial, solo abrir la aplicación y esperar unos segundos mientras carga los datos.

### API utilizada

La aplicación obtiene los datos desde esta fuente:

**[https://akabab.github.io/starwars-api/api/all.json](https://akabab.github.io/starwars-api/api/all.json)**

Esta API es pública y gratuita. Si abres el enlace en tu navegador, verás toda la información de los personajes en formato de texto (JSON). La aplicación lee estos datos automáticamente y los presenta de forma visual y organizada.

---

## Estados de la aplicación

### 1. **Pantalla de carga**

Cuando abres la aplicación por primera vez, verás:

- Un círculo giratorio (indicador de carga)
- El mensaje: **"Cargando personajes, espera un momento…"**

Esto significa que la aplicación está descargando la información de los personajes desde internet. Normalmente tarda solo unos segundos.

---

### 2. **Mensaje de error**

Si algo sale mal (por ejemplo, si no hay conexión a internet), verás un mensaje de error:

- **"No se han podido cargar los personajes. Inténtalo de nuevo."**

En este caso, comprueba tu conexión a internet y vuelve a abrir la aplicación.

---

### 3. **Listado de personajes**

Una vez que los datos se han cargado correctamente, verás:

- **Título principal**: "Personajes de Star Wars" (en color amarillo dorado)
- **Instrucción**: "Selecciona un personaje para ver más información" (en color claro)
- **Lista de personajes**: Cada personaje aparece en un recuadro con su nombre

Puedes **desplazarte hacia abajo** para ver todos los personajes disponibles. Para ver los detalles de un personaje, simplemente **toca su nombre**.

---

### 4. **Detalles del personaje**

Al tocar un personaje, la pantalla cambia y muestra:

- **Botón "← Volver"** (en rojo): Para regresar a la lista de personajes
- **Nombre del personaje** (en grande y amarillo dorado)
- **Imagen del personaje** (si está disponible)
- **Información detallada** dentro de un recuadro amarillo:
  - **Altura** (en metros)
  - **Peso** (en kilogramos)
  - **Color de pelo**
  - **Color de ojos**
  - **Género**
  - **Mundo natal**

Para volver a la lista principal, toca el botón **"← Volver"** en la parte superior.

---

## Diseño visual

### Colores utilizados

- **Fondo negro**: Simula el espacio exterior
- **Amarillo dorado (#ffe81f)**: Color característico de Star Wars, usado en títulos
- **Recuadros blancos/claros**: Para el listado de personajes
- **Recuadro amarillo**: Para la información detallada de cada personaje
- **Rojo**: Para el botón de volver, destacándolo del resto

### Organización de la información

La aplicación sigue principios de diseño visual para facilitar la lectura:

- Los **títulos** son más grandes y de color llamativo para destacar
- Los **elementos similares** (como los recuadros de personajes) tienen el mismo aspecto
- La **información detallada** está agrupada en un contenedor para mostrar que pertenece al mismo tema
- El **botón de volver** tiene un color diferente para que sea fácil de encontrar

---

## Requisitos

Para usar esta aplicación necesitas:

- Un dispositivo móvil (Android o iOS) o un navegador web compatible
- Conexión a internet (la primera vez que la abres y cada vez que necesites actualizar datos)

---

## Notas adicionales

- La aplicación no almacena datos personales
- Toda la información proviene de una fuente pública y es solo de consulta
- Si encuentras algún error o problema, verifica tu conexión a internet e inténtalo de nuevo.