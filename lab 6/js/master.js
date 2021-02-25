function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

function fav_piedras(){
  document.getElementById("fav_piedras");
  innerHTML = document.getElementById('c_piedras').innerHTML = '';
  let boton = document.getElementById('btn_piedras');
  boton.innerHTML = 'eliminar de favoritos';
  boton.onclick= quitar_piedaras();
}

function quitar_piedaras(){
  document.getElementById("c_piedras");
  inner = document.getElementById('fav_piedras').innerHTML = '';
  let boton = document.getElementById('btn_piedras');
  boton.innerHTML = 'agregar de favoritos';
  boton.onclick= quitar_piedaras();

}


function fav_like(){
  let li = document.getElementById("fav_like");
  innerHTML = document.getElementById('c_like').innerHTML;
  li.onclick = quitar_like();
  document.getElementById('c_like'),innerHTML ='';
}

function quitar_like(){
  let li = document.getElementById("c_like");
  innerHTML = document.getElementById('fav_like').innerHTML;
  li.onclick = fav_like();
  document.getElementById('fav_like'),innerHTML ='';

}