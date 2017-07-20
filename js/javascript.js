function mostrarDatos() {
	var n = document.getElementById("name");
	var m = document.getElementById("email");

	document.getElementById("mostrarNombre").innerHTML = n.value;
	document.getElementById("mostrarMail").innerHTML = m.value;
}