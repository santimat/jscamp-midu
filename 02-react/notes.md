# React con Vite

## Vite

Es un empaquetador que nos permite convertir nuestros paquetes en codigo entendible y ejecutable por el navegador.
Además nos permite ver actualizaciones en nuestra pagina al momento de guardar los cambios en el codigo.

- Estructura de carpetas:
  - src -> componentes, archivos css, etc
  - public -> archivos estaticos

## React

- Dentro de los archivos .jsx los atributos HTML deben ir escritos en camelCase y class debe ser reemplazada por className debido a que class es una palabra reservada para la creación de clases. No hay que olvidar que .jsx sigue siendo codigo javascript

### Single Page Application

- La navegación tipica, con los anchors es una Multiple Page Application, debido a que nosotros vamos cambiando la url y esto provoca que la pagina deba recargar todos los recursos nuevamente. Evitar esto es clave para un mejor rendimiento, además de prevenir recargar información traída desde el backend si no es necesaria.
- Con Single Page Application, podemos navegar dentro de una sola pagina, simplemente modificando aquello que es requerida, sin necesidad de recargar por ejemplo Header y Footer los cuales suelen ser compartidos entre multiples paginas.

### Hooks

- UseEffect:

```javascript
// useEffect is a function that receives a callback and dependencies which when one change the callback is executed
// useEffect always is executed one time
useEffect(
  () => {
    document.title = `DevJobs Search - Page ${currentPage} `;
  },
  // with no dependencies useEffect will be executed only one time
  [filteredJobs, currentPage],
);

// example of an use of useEffect, to get the window size each that this change
useEffect(() => {
  // we need a event hanlder as function to can remove the suscription later
  function handleResize(e) {
    console.clear();
    console.log(
      `Window resized Width: ${e.target.innerWidth} Height: ${e.target.innerHeight}`,
    );

    // add event
    window.addEventListener("resize", handleResize);
    // useEffect return a function when the component is dismounted
    return () => {
      // remove the event suscription, is importante remove suscription for performance issues
      window.removeEventListener("resize", handleResize);
    };
  }
});
```

### Custom Hooks

- Permiten extraer logica de codigo y quitarla del componente, además de que nos permite reutilizarla en distintos sitios, se tienen que crear siempre con el prefijo use y el nombre que querramos darle.
- Usando un custom hook, hacemos que en el compontente solo tengamos todo lo relacionado a la UI.
- Una regla de los custom hooks es que solo se pueden llamar dentro de la funcion principal del componente y no dentro de otras funciones como un handleClick, un useEffect, etc.

## CSS Modules

- Archivos con extension .module.css los cuales podemos importar en nuestro componente y de esta forma al usarlos react les asocia un identificador unico a las clases evitando colisiones entre clases similares de distintos componentes. Lo que logramos es aislar por componente nuestros estilos
