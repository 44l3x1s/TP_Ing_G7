var dibujador = function() {
	var map = mapCreation('mapid');
}
$(dibujador);					

function buscar(){
	var nombre = document.getElementById("nombre").value;	
	var autor = document.getElementById("autor").value;
	var tipo = document.getElementById("tipo").value;
	traerDatos();
	
}
function traerDatos(){
	console.log("traerDatos");
	const xhttp = new XMLHttpRequest();
	xhttp.open('GET','cuadros.json',true);
	xhttp.send();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}
	}

}