const cards = document.querySelectorAll(".card");

/* EFEITO 3D REAL SEGUINDO MOUSE */

cards.forEach(card=>{
card.addEventListener("mousemove",(e)=>{
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width/2;
const centerY = rect.height/2;

const rotateX = -(y - centerY)/20;
const rotateY = (x - centerX)/20;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

card.addEventListener("mouseleave",()=>{
card.style.transform = "rotateX(0) rotateY(0) scale(1)";
});

card.addEventListener("click",()=>{
card.style.transition="0.2s";
card.style.transform="scale(0.95)";
setTimeout(()=>{
window.location.href="produto.html";
},200);
});
});

/* PESQUISA FUNCIONAL */

document.getElementById("search").addEventListener("keyup",function(){
let value = this.value.toLowerCase();

cards.forEach(card=>{
let name = card.getAttribute("data-name");

if(name.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}
});
});
