const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao4 = document.getElementById("botao4");
const botao3 = document.getElementById('botao3');
const botao5 = document.getElementById('botao5');

botao1.addEventListener("click", () => {
    document.body.classList.remove('background-image');
    document.body.classList.remove('background2');
    document.body.classList.remove('background3');
    document.body.classList.remove('background4');
    document.body.classList.add('background1');

});

botao2.addEventListener("click", () => {
    document.body.classList.remove('background-image');
    document.body.classList.remove('background1');
    document.body.classList.remove('background3');
    document.body.classList.remove('background4');
    document.body.classList.add('background2');
  
});


botao3.addEventListener('click', () => {
    document.body.classList.remove('background-image');
    document.body.classList.remove('background1');
    document.body.classList.remove('background2');
    document.body.classList.remove('background4');
    document.body.classList.add('background3');
    

     
})



botao4.addEventListener('click', () => {
    document.body.classList.remove('background-image');
    document.body.classList.remove('background1');
    document.body.classList.remove('background2');
    document.body.classList.remove('background3');
    document.body.classList.add('background4');
});

botao5.addEventListener('click', () =>{
    document.body.classList.remove('background1');
    document.body.classList.remove('background2');
    document.body.classList.remove('background3');
    document.body.classList.remove('background4');
    document.body.classList.add('background-image');
})
