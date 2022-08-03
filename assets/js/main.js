import pintarProducts from "./components/products.js"
import {pintarArticle, 
        agregarArticulo, 
        eliminarArticle, 
        eliminarTodo, 
        vaciarCarrito, 
        comprar,
        articles } from "./components/cart.js"

const chemistryArticles = document.getElementById("chemistryArticles")
const cartArticles = document.getElementById("cartArticles")
const btnActions = document.getElementById("btnActions")

document.addEventListener("DOMContentLoaded", ()  => {
   pintarProducts()
   pintarArticle()

   chemistryArticles.addEventListener('click', (e) =>{
const target = e.target
if (target.classList.contains('agregar')){
const id = target.dataset.id
  agregarArticulo(+id,1)
}
pintarArticle()
})  

cartArticles.addEventListener("click", (e) =>{

    const target = e.target
    if (target.classList.contains('add')){
    const id = target.dataset.id
      agregarArticulo(+id,1)
    }
if (target.classList.contains('remove')){
const id = target.dataset.id
    eliminarArticle(+id,1)
}
if (target.classList.contains('deleteAll')){
    const id = target.dataset.id
    eliminarTodo(+id)
    }
pintarArticle()
})

btnActions.addEventListener("click", (e) => {
    const target = e.target 
    if(target.classList.contains('clear')){
        vaciarCarrito()   
    }
    if(target.classList.contains('btn_Comprar')){
        if(articles.length>0){
            comprar()
            pintarProducts()
        }else{
            window.alert("No hay aticulos en el carrito, agregue algunos")
        }       
    }
    pintarArticle()
})
})