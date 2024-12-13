/*
	FUNCIONES JS 
*/

// Funcion para validar si el user=admin, para cargar o no la pestaña "Reporte"

  document.addEventListener('DOMContentLoaded', function() {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const user = params.get('user'); // Extraer 'user'
    
    // Depuración: Verificar el valor del parámetro 'user' en la consola
    console.log("Valor de 'user' en la URL:", user);

    // Verificar si el valor de 'user' es 'admin'
    if (user === 'admin') {
      console.log("El usuario es 'admin', mostrando el botón.");
      
      // Buscar el botón y quitar la clase 'hidden' si está presente
      const tabReporte = document.getElementById('tab_reporte');
      
      if (tabReporte) {
        // Depuración: Ver si encontramos el botón y si la clase 'hidden' está presente
        console.log("Botón encontrado:", tabReporte);
        console.log("Clase 'hidden' antes de quitarla:", tabReporte.classList.contains('hidden'));
        
        // Solo quitar la clase 'hidden', sin habilitar el botón
        tabReporte.classList.remove('hidden');  // Quitar la clase 'hidden'
        
        // Depuración: Ver si la clase 'hidden' fue removida
        console.log("Clase 'hidden' después de quitarla:", !tabReporte.classList.contains('hidden'));
      } else {
        console.log("No se encontró el botón.");
      }
    } else {
      console.log("El usuario no es 'admin', el botón debería seguir oculto.");
    }
  });