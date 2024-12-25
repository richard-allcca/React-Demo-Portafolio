# Portafolio Abril 22 echo con react

- [ver Pagina](https://bright-peony-dc37e6.netlify.app/)

<!-- <img src="./src/assets/potafolio-react.png" > -->
-![Vista Previa](./src/assets/potafolio-react.png)

## Configuración para desplegar en Github - pages

1. Instalar npm i gh-pages
2. Agregar en el package.json lo siguiente:

``` json
    "homepage": "https://richard-allcca.github.io/Portafolio-react"
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```

- Script para desplegar en Github

``` npm
  npm run deploy
```

## Dependencias

``` npm
  npm i swiper
  npm i emailjs
  npm i @emailjs/browser
  npm i @iconscout/react-unicons
  npm i gh-pages --save-dev
  npm i framer-motion
  npm i react-scroll
```

## Enlaces

- [Correo](https://www.emailjs.com/)
- [Icons](https://iconscout.com/unicons)

- [tutorial despliegue](https://www.youtube.com/watch?v=82XNPIiHvOQ)

## Despliegue en Github pages

Instala gh-pages.

```bash
  npm install --save-dev gh-pages
```

Configura package.json para usar la carpeta dist.

```json
  {
    "homepage": "https://tu-usuario.github.io/mi-proyecto-react",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
      }
  }
```

Ejecuta npm run build para crear la carpeta dist.

Ejecuta npm run deploy para desplegar en GitHub Pages.

## Posibles Soluciones en caso de fallo al ver la pagina desplegada

> Configuración de vite.config.js:

Asegurarte de que el archivo vite.config.js esté correctamente configurado para apuntar a la base correcta.

> Eliminación y Recreación de la Rama gh-pages:

Eliminar la rama gh-pages existente y volver a crearla para asegurar una nueva implementación limpia.

> Verificación de la Carpeta dist:

Asegurarte de que el archivo index.html y todos los recursos estén correctamente organizados en la carpeta dist.

> Cache del Navegador:

Limpiar el caché del navegador o utilizar la ventana de incógnito para evitar que el caché anterior interfiera con la visualización del sitio actualizado.

## LINK pagina publicada

[Portafolio](https://richard-allcca.github.io/React-Demo-Portafolio/)
