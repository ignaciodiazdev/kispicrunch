import jugadores from '../data/jugadores.js'

const tabla = document.querySelector('#tabla-body');

const cargarTabla = () => {
  jugadores.forEach(jugador => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">
        <span>${jugador.ranking < 10 ?"0"+jugador.ranking : jugador.ranking}</span>
      </th>
      <td>
        <span class="image-item">
          <img src="${jugador.avatar}" alt="image">
          <span>${jugador.username}</span>
        </span>
      </td>
      <td>
        ${jugador.horas ? jugador.horas : "Privado"}
      </td>
      <td>
        <span class="image-item">
          <img src="images/trofeo.png" alt="image">
          ${jugador.ganados ? jugador.ganados+"%" : "Privado"}
        </span>
      </td>
      <td>${jugador.partidas ? jugador.partidas : "Privado"}</td>
    `;
    tabla.appendChild(row);
  })
}
document.addEventListener('DOMContentLoaded',  () => {
  var nav = document.querySelector('nav');

  nav.addEventListener('click', function (event) {
      // Verificar si el clic ocurrió en un elemento con la clase 'nav-link'
      if (event.target.classList.contains('nav-link')) {
          // Eliminar la clase 'highlight' de todos los elementos de navegación
          var navLinks = document.querySelectorAll('.nav-link');
          navLinks.forEach(function (item) {
              item.classList.remove('active');
          });

          // Agregar la clase 'highlight' al elemento de navegación seleccionado
          event.target.classList.add('active');
      }
  });
});
cargarTabla();