
const key = "d3733c72fd128d5f2cf0a4e2c4caf096"

function clickbtn () {
    const cidade = document.querySelector(".citie").textContent

    buscarCidade(cidade)
}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
    
}


function colocarDadosNaTela(dados) {
    
    document.querySelector(".city-name").innerHTML = dados.name
    document.querySelector(".temp-numero").innerHTML = dados.main.temp
}