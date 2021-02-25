function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

function fav_piedras() {
  document.getElementById("fav_piedras").innerHTML = document.getElementById('c_piedras').innerHTML;
  document.getElementById('c_piedras').innerHTML = '';
  let boton = document.getElementById('btn_piedras');
  boton.innerHTML = 'Eliminar de favoritos';
  boton.onclick = quitar_piedras;
}

function quitar_piedras() {
  document.getElementById("c_piedras").innerHTML = document.getElementById('fav_piedras').innerHTML;
  document.getElementById('fav_piedras').innerHTML = '';
  let boton = document.getElementById('btn_piedras');
  boton.innerHTML = 'Agregar a favoritos';
  boton.onclick = fav_piedras;
}

function fav_like() {
  let list_item = document.getElementById("fav_like");
  list_item.innerHTML = document.getElementById('c_like').innerHTML;
  list_item.onclick = quitar_like;
  document.getElementById('c_like').innerHTML = '';
}

function quitar_like() {
  let li = document.getElementById("c_like");
  li.innerHTML = document.getElementById('fav_like').innerHTML;
  li.onclick = fav_like;
  document.getElementById('fav_like').innerHTML = '';
}

document.getElementById('c_lobo').onclick = fav_lobo;

function fav_lobo() {
  let list_item = document.getElementById("fav_lobo");
  list_item.innerHTML = document.getElementById('c_lobo').innerHTML;
  list_item.onclick = quitar_lobo;
  document.getElementById('c_lobo').innerHTML = '';
}

function quitar_lobo() {
  let li = document.getElementById("c_lobo");
  li.innerHTML = document.getElementById('fav_lobo').innerHTML;
  li.onclick = fav_lobo;
  document.getElementById('fav_lobo').innerHTML = '';
}