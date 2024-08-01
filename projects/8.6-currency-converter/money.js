// About asynchronous programming https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

async function getCurrencies() {
    
    let apiKey = "8063a6ac4a-a5ba671794-shil9g";
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
    let apiKey = "8063a6ac4a-a5ba671794-shil9g";
    let route = "/fetch-all/";
    let endpoint = "https://api.fastforex.io";
    let url = endpoint + route + "?api_key=" + apiKey + "&from=" + from ;
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

async function loadCurrencies() {
    let currencies = await getCurrencies();
    console.log("Currencies: " , currencies);
    let currencyList = Object.entries(currencies);
    console.log(" Currency List: " , currencyList);

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
    console.log("from: " , from);

    let currencyRates = await getCurrencyRate(from);
    console.log("Currency rates: " , currencyRates);
    let currencyRateList = Object.entries(currencyRates);
    console.log(" Currency Rate List: " , currencyRateList);

    let selectTo = document.getElementById("currencyTo");

    for (let i = 0; i < selectTo.options.length; i++) {
        let option = selectTo.options[i];
        let currentText = option.text;
        let currentTextArray = currentText.split(" - ");
        let currentCurrencyName = currentTextArray[1];
        let currentCurrencyAbbreviation = currentTextArray[0];

        let index = currencyRateList.findIndex((element) => element[0] === currentCurrencyAbbreviation);
        
        let newText = currentCurrencyAbbreviation + " - " + currentCurrencyName + " - " + currencyRateList[index][1];

        option.text = newText;
        option.value = currencyRateList[index][1];
    }

}

function convert(amount, rate) {
    return amount * rate;
}

function convertCurrency() {

    let amount = document.getElementById("amount").value;
    let rate = document.getElementById("currencyTo").value;
    if (!(isNaN(parseFloat(rate)))) {
        let convertedAmount = convert(amount, rate);
        document.getElementById("convertedAmount").value = convertedAmount;
        document.getElementById("message").hidden = true;
    } else {
        document.getElementById("message").innerHTML = "Por favor, capture as taxas de conversão através dos botões Listar moedas e Pegar taxas";
        document.getElementById("message").hidden = false;
    }

}