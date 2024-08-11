<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta Equatorial</title>
</head>
<body>

    <h1>Equatorial Energia</h1>
    <p>Consulte aqui a sua fatura</p>

    <form action="equatorial.php?page=consultar" method="POST">
        <fieldset>
            <label for="conta_contrato">Conta contrato:</label>
            <input type="text" name="conta_contrato" id="conta_contrato">
        </fieldset>

        <fieldset>
            <label for="cpf_cnpj">CPF/CNPJ:</label>
            <input type="text" name="cpf_cnpj" id="cpf_cnpj">
        </fieldset>

        <fieldset>
            <label for="data_nascimento">Data de nascimento:</label>
            <input type="date" name="data_nascimento" id="data_nascimento">
        </fieldset>

        <input type="submit" value="Consultar">
    </form>
    
</body>
</html>