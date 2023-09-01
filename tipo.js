//MENU
const toggleButton = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('main-menu');

toggleButton.addEventListener('click', () => {
    mainMenu.classList.toggle('mostrar'); 
});

//carrito
const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');
const carrito = [];

agregarCarritoButtons.forEach((button, index) => {
 button.addEventListener('click', () => {
   const productoSeleccionado = {
     imagen: button.parentNode.querySelector('img').src,
     precio: parseFloat(button.parentNode.querySelector('.precio').textContent.replace('$', '')),
   };

   carrito.push(productoSeleccionado);
   actualizarCarrito();
   actualizarValorTotal();
 });
});


function actualizarCarrito() {
 const listaCarrito = document.getElementById('lista-carrito');
 listaCarrito.innerHTML = '';

 carrito.forEach((producto, index) => {
   const listItem = document.createElement('li');
   listItem.innerHTML = `
     <img src="${producto.imagen}" alt="Producto">
     <p>${producto.precio}</p>
   `;
   listaCarrito.appendChild(listItem);
 });
}
//pagar
const botonPagar = document.getElementById('pagar');

botonPagar.addEventListener('click', () => {
 if (carrito.length > 0) {
   carrito.length = 0;
   actualizarCarrito();
   alert('¡GRACIAS POR TU COMPRA!');
 } else {
   alert('El carrito está vacío. Agrega productos antes de pagar.');
 }
});
// valor total
function calcularTotalCarrito() {
   let total = 0;

   for (const producto of carrito) {
       const precioNumerico = parseFloat(producto.precio.replace('$', ''));
       total += precioNumerico;
   }

   return total;
}

function actualizarValorTotal() {
   const valorTotalElemento = document.getElementById('valor-total');
   valorTotalElemento.textContent = `$${calcularTotalCarrito().toFixed(2)}`;
}

actualizarValorTotal();