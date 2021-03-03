var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();//fazendo a requisição pelo objeto do JS XMLHttpRequest

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//busca api pelo método open com o tipo e endereço

    xhr.addEventListener("load", function() {//load - Ao escutarmos o evento, carregaremos a resposta da requisição - que no caso, serão nossos dados.
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {//propriedade status, indica condição da requisição
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;//para acessarmos os dados da resposta, usaremos a propriedade responseText do XMLHttpRequest
            var pacientes = JSON.parse(resposta);//parseador de JSON - tranformando a resposta (string)em um array. 

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();//o método send realiza os passos acima
});

//JSON (sigla de JavaScript Object Notation)- um formato de dados parecidos com os objetos do JavaScript que podemos transportar pela web.

//A técnica utilizada nessa aula é conhecida como AJAX, essa maneira de fazer uma requisição de forma assíncrona com JavaScript.