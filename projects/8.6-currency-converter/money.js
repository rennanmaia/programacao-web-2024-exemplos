// About promises https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

async function getCurrencies() {
    
    let apiKey = "bd6c24ec1b-b8ea5ef81b-sh5h9z";
    let route = "/currencies";
    let endpoint = "https://api.fastforex.io";
    let url = endpoint + route + "?api_key=" + apiKey;
    
    const options = {
        method: 'GET', 
        headers: {
            accept: 'application/json'
        }
    };

    const responseData = await fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.currencies);
            return data;
        })
        .catch(error => console.log(error));
}


async function convert(amount, from, to) {
    return amount * (to / from);
}