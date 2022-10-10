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
