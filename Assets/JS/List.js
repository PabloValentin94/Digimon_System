const api = "https://digimon-api.vercel.app/api/digimon";

const requisicao = fetch(api);

const json = requisicao.then(resposta => {

    if(resposta.ok)
    {

        return resposta.json();

    }

})

json.then(digimons => {

    // console.log(digimons);

    // O Set é uma espécie de vetor, mas com uma condição interessante, que é o fato de não aceitar valores duplicados.

    var indices_digimons = new Set();

    while(indices_digimons.size < 20)
    {

        const numero_aleatorio = Math.floor(Math.random() * 209);

        indices_digimons.add(numero_aleatorio);

    }

    // console.log(indices_digimons);

    var id = 1;

    indices_digimons.forEach((indice) => {

        document.getElementById(id).innerHTML = "<img src='" + digimons[indice].img + "' alt='Digimon'>";

        document.getElementById(id).innerHTML += "<div class='name'> <a href='https://digimon-api.vercel.app/api/digimon/name/" + digimons[indice].name + "'> <h2> " + digimons[indice].name + " </h2> <p> Level: " + digimons[indice].level + " </p> </a> </div>";

        id++;

    })

})