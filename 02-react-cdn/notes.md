# React

- React es declarativa es decir nosotros decimos lo que queremos lograr y no imperativa es decir decir paso a paso como lograr eso que queremos

- React sirve no solo para webs, sino tambien para aplicaciones nativas, apps mobiles, videojuegos, etc. Es decir tiene varios fines y depende de lo que quieras hacer vas a importar o instalar ciertas dependencias

- React nos ofrece la posibilidad de crear componentes:
  - Estos componentes basicamente son porciones de codigo las cuales podes utilizar en distintas partes de nuestra web, volviendolos dinamicos aceptando información por medio de atributos.
  - No todas las funciones en react son componentes, para que una de estas pueda ser un componente el nombre de la función tiene que obligatoriamente empezar con mayuscula.

- Estados en react.
  - Los estados en react son variables que nos permiten manejar actualizaciones en los elementos, cuando cambiamos el valor en uno de estas variable (el estado) react va a actualizar la UI.
    Podemos usar esto para modificar la UI de forma dinamica dependiendo de ciertos valores en el estado.
  - Cada que el valor de un estado cambia para reflejar los cambios en el componente, react re-renderiza la UI, es decir el componente completo. Esto no significa que vuelta a recrear todo el html, sino que simplemente "re-pinta" aquellos elementos los cuales han cambiado realmente.

- React tiene algo llamado virtual DOM. Basicamente lo que hace react es renderizar el componente y guardarlo en memoria, para luego cuando haya un cambio, comparar con lo almacenado en memoria y simplemente modificar lo que sea distinto para cambiar solo eso y no reescribir todo el html desde cero.
