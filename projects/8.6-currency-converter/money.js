// About asynchronous programming https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

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

    const response = await fetch(url, options);
    const data = await response.json();
    return data.currencies;

}

async function getCurrencyRate(from) {
    let apiKey = "bd6c24ec1b-b8ea5ef81b-sh5h9z";
    let route = "/fetch-all/";
    let endpoint = "https://api.fastforex.io";
    let url = endpoint + route + "?api_key=" + apiKey + "&base=" + from ;
    console.log(url);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
    return data.results;

}

async function convert(amount, from, to) {
    return amount * (to / from);
}

async function loadCurrencies() {
    let currencies = await getCurrencies();
    let currencyList = Object.entries(currencies);

    let selectFrom = document.getElementById("currencyFrom");
    let selectTo = document.getElementById("currencyTo");

    selectFrom.innerHTML = "";
    selectTo.innerHTML = "";

    for (let i = 0; i < currencyList.length; i++) {
        let optionFrom = document.createElement("option");
        optionFrom.value = currencyList[i][0];
        optionFrom.text = currencyList[i][0] + " - " + currencyList[i][1];
        
        let optionTo = document.createElement("option");
        optionTo.value = currencyList[i][0];
        optionTo.text = currencyList[i][0] + " - " + currencyList[i][1];

        selectFrom.add(optionFrom);
        selectTo.add(optionTo);
    }
}

async function loadCurrencyRates() {
    let from = document.getElementById("currencyFrom").value;
    console.log(from);

    let currencyRates = await getCurrencyRate(from);
    console.log(currencyRates);

    let selectTo = document.getElementById("currencyTo");
    selectTo.innerHTML = "";

    for (let i = 0; i < currencyRates.length; i++) {
        let optionFrom = document.createElement("option");
        optionFrom.value = currencyList[i][0];
        optionFrom.text = currencyList[i][0] + " - " + currencyList[i][1];
        
        let optionTo = document.createElement("option");
        optionTo.value = currencyList[i][0];
        optionTo.text = currencyList[i][0] + " - " + currencyList[i][1];

        selectFrom.add(optionFrom);
        selectTo.add(optionTo);
    }

}