# Intro a `react`

## Introducción

React es un frameworks que desarrolló Facebook (ahora llamado Meta) para hacer
paginas web.

Pero eso es un montón de información, vayamos muchos pasos atrás:

## La web

La web es algo muy complejo, y además evoluciona muy, pero muy rápido.
Dentro de todo IT las cosas avanzan bastante rápido, pero la web es el papa de
la velocidad de cambio en desarrollo de software.

Partiendo de esa asunción/realidad, hay _muchas_ alternativas para hacer páginas
web. Todas de ellas coinciden en lo mismo: *para hacer una página web necesitás*

- un html
- un css
- y un javascript

Entonces, todas las librerías y frameworks de todos los lenguajes están
orientadas a hacer eso: tener como salida un html, css y javascript. Eso es lo
que Angular, Vue, React, Svelte, y todas las otras librerías tienen en común.
Incluso entre distintos lenguajes es válido!

## Tipos de webs

Debido a que la web es compleja, hay algunas "clasificaciones" o divisiones
que pueden ayudar a distinguir una cosa de otra. React sirve para las páginas
tipo SPA = Single Page Application. Esto en palabras sencillas significa que
cuando cargás la web, la url no te cambia y vas navegando entre distintas
"páginas". En realidad nunca te moviste de la URL, sino que es react
_cambiándote la pantalla_ cada vez que haces click en un filtro o en una vista
Hay otros tipos de webs, por ejemplo, en una página de documentacion raramente
vas a tener muchos componentes, interacción, filtros y qué se yo. Suele ser una
página más tranquilita. Bueno, esas páginas se suelen hacer en modo Static.
significa que una URL es 1 y solo 1 página. Haces click en un link, y te lleva
a otra página. Hay frameworks que te dejan hacer blogs (paginas con
relativamente poca reactividad) como por ejemplo Eleventy, jeckyll, etc.
Además hay más tipo, como por ejemplo el híbrido, que es la combinación de el
estático más lo de SPA, creando partes interactivas solo donde las necesitás.
Además hay un tema de performance, que las SPA son más lentas en cargar, y
a google le cuesta más encontrar información para que cuando un usuario busque
en la barra le aparezca info de tu página.

## Por qué React?

Hay un motivo técnico, pero la realidad es que se aprende porque es el más
utilizado en la industria (cerca de un 75% de las empresas usaran React).
Entonces, por más bueno que sea otro framework, es difícil que se justifique
aprenderlo antes que react. Es un especie de estandar con el cual comparar todo.

## Qué es lo que hace react?

Lo que hacen un poco todos los frameworks, como input un codigo en el lenguaje
que sea, y como output un:

- html
- css
- js

En concreto, toma _componentes_ escritos en _jsx_ o _tsx_ y los _renderiza_ en
un tag de un html llamado `root`.

# NodeJS

Node es un motor de javascript para ejecutar fuera de un navegador.
Tiene `npm` que es un CLI (Command Line Interface) que te deja ejecutar comandos
y scripts

Para que ande npm, necesitás crear un archivo `package.json`. Ese tiene
generalmente una key `dependencies` y otra `scripts`.

Con `npm install` se instalan las dependencias dentro de la carpeta
`node_modules`. Y luego te crea un archivo `package-lock.json`

Cuando le das a `npm start` en realidad lo que estas haciendo es ejecutando el
script que aparece en el `package.json` en la parte de `scripts.start`.
