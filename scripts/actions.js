function mostrarContenido(id) {
  // Ocultar todos los elementos con la clase "hobby"
  var elementosHobby = document.getElementsByClassName("hobby");
  for (var i = 0; i < elementosHobby.length; i++) {
      elementosHobby[i].style.display = "none";
  }

  // Mostrar el elemento con el ID especificado
  var elementoMostrar = document.getElementById(id);
  if (elementoMostrar) {
      elementoMostrar.style.display = "block";
  }
}
