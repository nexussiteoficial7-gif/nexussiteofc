/* MOSTRAR PRODUTOS APÓS INTRO */

setTimeout(()=>{
document.getElementById("products").classList.add("show");
},2500);

function abrirProduto(nome){
localStorage.setItem("produtoEscolhido",nome);
window.location.href="produto.html";
}
