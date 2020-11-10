function comparar(){

	var nombre = document.getElementById("nombre").value;	
	var autor = document.getElementById("autor").value;
	var tipo = document.getElementById("tipo").value;



	var candidatos =[];  

	var boolean = false;
	for (var i = 0; i < cuadros.length; i++) {
		if( nombre.toUpperCase()==cuadros[i].nombre.toUpperCase() || autor.toUpperCase()==cuadros[i].autor.toUpperCase() 
			||tipo.toUpperCase() == cuadros[i].tipo.toUpperCase()){

			//guardo las coincidencias
			candidatos.push(cuadros[i]);
			boolean = true;

		}
		if (i==cuadros.length-1 && boolean==false){
			alert("No se encontro ninguna relacion")
		}

	}
	mostrarResultados(candidatos);

}
function mostrarResultados(arreglo){

let contenido = document.getElementById("mybox");
contenido.innerHTML = " ";
	for(var item of arreglo ){

		let imagen = document.createElement("img");
		let nombre = document.createElement("p");
		let autor = document.createElement("p");
		let tipo = document.createElement("p");
		
		nombre.innerText = "nombre: "+item.nombre; 
		autor.innerText = "autor: "+item.autor;
		tipo.innerText = "tipo: "+item.tipo;
			

		imagen.setAttribute("src",item.imagen);
		//h2.setAttribute("ssss");
		//inyecto en el dom
		contenido.appendChild(imagen);
		contenido.appendChild(nombre);
		contenido.appendChild(autor);
		contenido.appendChild(tipo);
		//contenido.appendChild(tipo);
		//contenido.appendChild(imagen);
	}


/*
	let datos = document.querySelector('#mybody');
	datos.innerHTML= " ";
	for(let i of arreglo){
		datos.innerHTML += `
		<tr>
			<td>${i.nombre}</td>
			<td>${i.autor}</td>
			<td>${i.tipo}</td>
			<td><img src="${i.url}"></td>	
			
			
		</tr>

		`
	}
*/		
}