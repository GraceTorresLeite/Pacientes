/*Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode. 
A seguir selecionaremos quem foi clicado e removeremos o seu pai, uma tag <tr>:*/

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

    if (event.target.tagName == 'TD') { // condição incluída para não permitir a retirada do Top da tabela
        event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

    }
});