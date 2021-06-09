let productos= [[0, "Coca",12], [1, "Papas",15], [2, "Chocolate",13], [3, "Panditas",12], [4, "Chicles",2], [5, "Galletas",14]];

window.addEventListener("load", cargar);
function cargar(){
	for(i=0; i<productos.length; i++){
		document.querySelector('section').innerHTML+="<div id='"+productos[i][0]+"'>"+
														"<h1>"+productos[i][1]+"</h1>"+
															"<p>$"+productos[i][2]+"</p>"+
															"<button onclick='agregar("+productos[i][0]+")'>+</button>"+
															"</div>";
	}
}

let carrito=[];
function agregar(id){
	carrito.push(id);
	document.querySelector('s').innerHTML=carrito.length;
}

function mostrasCarrito(){
	let listaProductos="";
	for(i=0; i<carrito.length; i++){
		for(j=0; j<productos.length; j++){
			if(productos[j][0]=carrito[i]){
				listaProductos+= " *"+productos[j][1]+"  $"+productos[j][2]+"\n";
			}
		}
	}
	alert("LISTA DE PRODUCTOS: \n"+listaProductos);
}
