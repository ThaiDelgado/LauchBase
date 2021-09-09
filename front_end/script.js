//criar um script que faça o modal-overlay aparecer assim clicarmos no card e o remova quando clicarmos no modal-close

const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
for(let card of cards){
    console.log('12312312312312312312', card)
    card.addEventListener("click", function(){modalOverlay.classList.add("active")} )
}
