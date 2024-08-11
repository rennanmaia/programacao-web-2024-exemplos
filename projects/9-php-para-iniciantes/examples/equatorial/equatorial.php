<?php

$bd = array(
    [
        "conta_contrato" => "123456",
        "nome" => "Fernando",
        "cpf_cnpj" => "12345678912",
        "data_nascimento" => "01/01/2000",
        "faturas" => [
            [
                "vencimento" => "01/01/2020",
                "valor" => "R$ 100,00"
            ],
            [
                "vencimento" => "01/02/2020",
                "valor" => "R$ 120,00"
            ],
            [
                "vencimento" => "01/03/2020",
                "valor" => "R$ 130,00"
            ]
        ]
    ],
    [
        "conta_contrato" => "123457",
        "nome" => "Cynthia",
        "cpf_cnpj" => "98765432165",
        "data_nascimento" => "01/02/2001",
        "faturas" => [
            [
                "vencimento" => "01/01/2020",
                "valor" => "R$ 200,00"
            ],
            [
                "vencimento" => "01/02/2020",
                "valor" => "R$ 220,00"
            ],
            [
                "vencimento" => "01/03/2020",
                "valor" => "R$ 230,00"
            ]
        ]
    ],
    [
        "conta_contrato" => "123458",
        "nome" => "Maurício",
        "cpf_cnpj" => "45678912366",
        "data_nascimento" => "01/02/2002",
        "faturas" => [
            [
                "vencimento" => "01/01/2020",
                "valor" => "R$ 300,00"
            ],
            [
                "vencimento" => "01/02/2020",
                "valor" => "R$ 320,00"
            ],
            [
                "vencimento" => "01/03/2020",
                "valor" => "R$ 330,00"
            ]
        ]
    ]


);

// print_r($bd);

$conta_contrato = $_POST["conta_contrato"];
$cpf_cnpj = $_POST["cpf_cnpj"];
$data_nascimento = $_POST["data_nascimento"];

$exibir_cc = array();

for ($i = 0; $i < count($bd); $i++) {

    if ($conta_contrato != "") {
        if ($bd[$i]["conta_contrato"] == $conta_contrato) {
            $exibir_cc = $bd[$i];
        }        
    } else {
        if ($bd[$i]["cpf_cnpj"] == $cpf_cnpj) {
            $exibir_cc = $bd[$i];
        }
    }
}

// print_r($exibir_cc);

if (count($exibir_cc) > 0 ) {

    echo "<p>Conta contrato: " . $exibir_cc["conta_contrato"] . "</p>";
    echo "<p>Nome: " . $exibir_cc["nome"] . "</p>";
    echo "<p>CPF/CNPJ: " . $exibir_cc["cpf_cnpj"] . "</p>";
    echo "<p>Data de nascimento: " . $exibir_cc["data_nascimento"] . "</p>";
    
    foreach ($exibir_cc["faturas"] as $key => $value) {
        echo "<p>Vencimento: " . $value["vencimento"] . " - ";
        echo "Valor: " . $value["valor"] . "</p>";
    }
    
} else {
    echo "<p>Conta não encontrada</p>";
}


?>