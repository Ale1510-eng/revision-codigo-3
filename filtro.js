// Tenemos un arreglo de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// Se cambian los nombres de variables a otros más representativos
const lista = document.getElementById("lista-de-productos") // Se cambia getElementsByName por getElementById ya que el parametro es un ID
const input = document.querySelector('input'); // se quita el punto debido a que input no es una clase sino un nombre de etiqueta
//Se cambia var por let adentro del ciclo for como buena práctica ya que no se debe usar var
//Se pone el ciclo for en una función para reutilizarlo al filtrar
renderizarProductos(productos);
//displayProductos(productos) Esta función no se declara y no tiene funcionalidad
const botonDeFiltro = document.querySelector("button");


botonDeFiltro.onclick = function() {
  // Ciclo while que limpia la lista de productos al filtrar
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  // Guarda el valor del input en la constante texto
  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );// Array productos filtrados
  //renderiza la tarjeta de los productos que coinciden con el filtro
  renderizarProductos(productosFiltrados);
}
 
/**
 * 
 * @param {arreglo} productos
 * Por cada elemento delarreglo crea una tarjeta 
 */
 function renderizarProductos(productos){
  for (let i = 0; i < productos.length; i++) {
    let div = document.createElement("div")
    div.classList.add("producto")
  
    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productos[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    div.appendChild(titulo)
    div.appendChild(imagen)
  
    lista.appendChild(div)
  }
 }

/**
 * 
 * @param {*arreglo} productos 
 * @param {*string} texto 
 * @returns {arreglo}Productos que coinciden con el filtro aplicado (texto)
 */
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}