import products from "../database/index.js"

/* CREAR NUEVO ARRAY VACIO */
let articles = []
const articulosCarrito = document.getElementById("cartArticles")
const precioTotal = document.getElementById("precioTotal")
/*PARA PINTAR LOS ARTICULOS EN EL CARRITTO*/
function pintarArticle () {
/* CREAR VARIABLE PARA LUEGO ALMACENAR LOS ARTICULOS*/
let html = ''
/*RECORRER EL ARRAY DE ARTICULOS*/
for ( const article of articles){
  const filtredProduct = products.find(product => product.id === article.id)
  const {id, nombre, precio, imagen, cantidad, info1, info2} = filtredProduct

  html += 
  `
<article class="Card_cart">
    <section class="face front_cart">
    <img src="${imagen}" alt="">
      <h3>${nombre}</h3>
      <p>${info1}</p>
    </section>
    <section class="face back_cart">
      <h3>${nombre}</h3>
      <p>${info2}</p>
      <div class="link_cart">
        <div class="price_cart">Precio: $ ${article.cantidad * precio} x ${article.cantidad} </div>
        <button class="remove" type="button" data-id="${id}">-</button>
        <div class="stock_cart">${article.cantidad}</div>
        <button class="add" type="button" data-id="${id}">+</button>
        <button class="deleteAll" type="button" data-id="${id}">Borrar</button>
      </div>  
    </section>
  </article>
`
}
articulosCarrito.innerHTML=html
precioTotal.innerHTML= mostrarTotal()
}

function agregarArticulo(id, cantidad){
  const filtredProduct = products.find(product => product.id === id)
/*REVISAR SI TENEMOS STOCK DEL PRODUCTO*/ 
if (filtredProduct && filtredProduct.cantidad>0){
/* SI EL ARTICULO NO ESTÁ, LO AGREGAMOS, PERO SI YA ESTÁ, ENTONCES LE ADICIONAMOS LA CANTIDAD*/ 
const filtredArticle =articles.find(article => article.id === id)
if(filtredArticle){
  /* SI LA CANTIDAD NO SUPERA EL STOCK, AUMENTAMOS LA CANTIDAD, SI NO MOSTRAMOS UN MENSAJE*/
  if (revisarInventario(id, cantidad + filtredArticle.cantidad)){
    filtredArticle.cantidad += cantidad
  }else{
    window.alert("No hay suficiente en el stock")
  }
}else{
  articles.push({id, cantidad})
}
}else{
  window.alert("Lo sentimos, no hay disponibilidad")
}
}
function eliminarArticle(id,cantidad){
  const filtredArticle =articles.find(article => article.id === id)
  if(filtredArticle.cantidad - cantidad>0){
    filtredArticle.cantidad -= cantidad  
  } else {
    const confirmar = window.confirm("¿Seguro que quieres remover el articulo?")
    if (confirmar){
      articles = articles.filter(article => article.id !== id)
    }
  }
}
function eliminarTodo(id){
  articles = articles.filter(article => article.id !== id)
}
function mostrarTotal(){
  let total = 0
  for (const article of articles){
    const filtredProduct = products.find(product => product.id === article.id)
    total += article.cantidad * filtredProduct.precio
  }
  return `$${total}`
}
function vaciarCarrito(){
  articles = []
}
function comprar(){
  for (const article of articles){
    const filtredProduct = products.find(product => product.id === article.id)
    filtredProduct.cantidad -= article.cantidad
  }
  vaciarCarrito()
  window.alert(`Gracias por tu compra`)
}
function revisarInventario (id, cantidad){
  const filtredProduct = products.find(product => product.id === id)
  return filtredProduct.cantidad - cantidad >=0
}


export { pintarArticle, 
        agregarArticulo, 
        eliminarArticle, 
        eliminarTodo, 
        vaciarCarrito, 
        comprar,
        articles }