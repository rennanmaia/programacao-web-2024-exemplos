function catchText() {
    
    var text = document.getElementById("newText").value;
    document.getElementById("charDescription").innerHTML = charactersCounter(text);

}

function charactersCounter(text) {

    let limit = 140;
    let textLength = text.length;

    textLengthText =
        "O texto tem " + textLength + 
        " caracteres. Faltam " + 
        (limit - textLength) + 
        " caracteres.";
    return textLengthText;

}