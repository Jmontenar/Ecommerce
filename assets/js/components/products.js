import products from '../database/index.js'


/*BUSCAR UN ELEMENTO EN EL DOM*/
const chemistryArticles = document.getElementById("chemistryArticles")
   
/*PARA PINTAR LOS PRODUCTOS EN EL DOM*/
function pintarProducts(){
/*creamos una variable para despues almacenar los productos*/
    let html = ''
/*Recorrer el array de products  */
for (const {id, nombre, precio, imagen, cantidad }  of products){
    html += 
`
<article class="Card">
    <section class="face front">
    <img src="${imagen}" alt="">
      <h3>${nombre}</h3>
    </section>
    <section class="face back">
      <h3>${nombre}</h3>
      <div class="link">
        <div class="price">Precio: $ ${precio}</div>
        <div class="stock">Stock:${cantidad}</div>
      </div>
      <div>
      <button type="button" class="agregar" data-id="${id}">Agregar al Carrito</button>
      </div>
    </section>
  </article>
`
}   
chemistryArticles.innerHTML = html     
}

export default pintarProducts




