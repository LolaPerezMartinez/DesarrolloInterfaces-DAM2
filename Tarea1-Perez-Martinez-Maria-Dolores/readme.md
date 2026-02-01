# 🎬 Video Player

**Reproductor de video personalizado en JavaScript**

---

## 📌 Sobre este proyecto

Este reproductor de video te permite crear tu propia interfaz de reproducción con controles personalizados. Puedes implementarlo con `Pug + Express` o con `HTML puro`.

---

## 🌟 Características

### 🎮 Controles intuitivos
Botones de Play y Pause para controlar la reproducción fácilmente.

### ⏱️ Seguimiento de tiempo
Visualiza el tiempo reproducido y el tiempo restante en tiempo real.

### 🎨 Personalizable
Diseño adaptable y fácil de modificar según tus necesidades.

### 📹 Múltiples videos
Añade tantos videos como quieras de forma dinámica.

---

## 🚀 Opciones de Implementación

### 🧩 Opción 1: Con Pug y Express

#### 📦 Configuración inicial

1. Crea una carpeta para tu proyecto y abre la terminal en esa ubicación.

2. Inicializa el proyecto Node.js:
```bash
npm init -y
```

3. Instala las dependencias necesarias:
```bash
npm install express pug
```

4. Crea el archivo principal `app.js` o `index.js` en la raíz del proyecto.

5. En `package.json`, asegúrate de que la propiedad **"main"** apunte a tu archivo principal.

#### 📁 Estructura de carpetas
```
📂 mi-proyecto-video
├── 📄 app.js
├── 📄 package.json
├── 📂 views
│   └── 📄 index.pug
└── 📂 public
    ├── 📂 js
    │   └── 📄 VideoPlayer.js
    ├── 📂 css
    │   └── 📄 estilos.css
    └── 📂 images
```

#### 🔗 Enlazar el script en Pug

En tu archivo `.pug`, enlaza el archivo JavaScript:
```pug
script(src="js/VideoPlayer.js")
```

---

### 🧱 Opción 2: Sin Framework (HTML + JS)

**✅ Recomendado para:** Proyectos simples, aprendizaje o si no necesitas un servidor.

1. Crea un archivo `index.html` básico.

2. Crea el archivo `VideoPlayer.js` con la clase del reproductor.

3. Enlaza el script en tu HTML:
```html
<script src="VideoPlayer.js"></script>
```

4. Crea una instancia del reproductor:
```javascript
const v1 = new VideoPlayer({ titulo: 'Mi video' });
```

5. Añade videos con la función `agregarVideo()`:
```javascript
v1.agregarVideo({ src: 'https://www.w3schools.com/html/mov_bbb.mp4' });
```

#### 📁 Estructura simplificada
```
📂 mi-proyecto-video
├── 📄 index.html
├── 📄 VideoPlayer.js
└── 📄 README.md
```

---

## 💻 Uso del Video Player

### Crear una instancia

Inicializa el reproductor con un título personalizado:
```javascript
const miReproductor = new VideoPlayer({ titulo: 'Mis Videos Favoritos' });
```

### Agregar videos

Añade uno o varios videos usando su URL:
```javascript
miReproductor.agregarVideo({ 
    src: 'https://www.w3schools.com/html/mov_bbb.mp4' 
});

miReproductor.agregarVideo({ 
    src: 'https://ejemplo.com/video2.mp4' 
});
```

### Ejemplo completo
```javascript
// 1. Crear el reproductor
const v1 = new VideoPlayer({ titulo: 'Mi Colección' });

// 2. Agregar videos
v1.agregarVideo({ src: 'https://www.w3schools.com/html/mov_bbb.mp4' });
v1.agregarVideo({ src: 'https://ejemplo.com/video2.mp4' });

// 3. El reproductor se renderiza automáticamente en el body
```

---

## 🎮 Controles Disponibles

- **Botón Play:** Inicia la reproducción del video
- **Botón Pause:** Pausa el video actual
- **Click en el video:** También inicia la reproducción
- **Indicador de tiempo reproducido:** Muestra cuánto tiempo ha transcurrido
- **Indicador de tiempo restante:** Muestra cuánto falta para finalizar

---

## 🎨 Personalización

Puedes personalizar el reproductor de varias formas:

### Estilos CSS

Utiliza estas clases para aplicar estilos personalizados:

- `.videoPlayer` - Contenedor principal
- `.play` - Botón de reproducción
- `.pause` - Botón de pausa
- `#demo` - Tiempo reproducido
- `#tiempoRestante` - Tiempo restante

### Modificar tamaño del video

En el código JavaScript, cambia la propiedad `width`:
```javascript
video.style.width = "500px"; 
```

> **⚠️ Nota importante:** Asegúrate de que las URLs de los videos sean accesibles públicamente y permitan la reproducción desde tu dominio (CORS).

---

## 📝 Parámetros de la Clase

### Constructor VideoPlayer

| Parámetro | Tipo   | Por defecto | Descripción           |
|-----------|--------|-------------|-----------------------|
| `titulo`  | String | 'mi-video'  | Título del reproductor |

### Método agregarVideo()

| Parámetro | Tipo   | Requerido | Descripción    |
|-----------|--------|-----------|----------------|
| `src`     | String | Sí        | URL del video  |

---

## 🐛 Solución de Problemas

### El video no se reproduce

- Verifica que la URL del video sea correcta y accesible
- Asegúrate de que el servidor permita CORS
- Comprueba que el formato del video sea compatible

### No veo el reproductor en la página

- Verifica que el script esté correctamente enlazado
- Abre la consola del navegador para ver posibles errores
- Asegúrate de haber creado una instancia del VideoPlayer

---

## 💻 Creado por Lola

Proyecto educativo para aprender JavaScript, manipulación del DOM y Pug

📚 Siéntete libre de modificar y mejorar este proyecto