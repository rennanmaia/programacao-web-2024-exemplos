<?php

$user1 = [
    "email" => "caio@ufopa.edu.br",
    "name" => "Caio",
    "password" => "123456",
    "role" => "professor"
];

$user2 = [
    "email" => "clevesson@ufopa.edu.br",
    "name" => "Clevesson",
    "password" => "123",
    "role" => "aluno"
];

$users = array();
array_push($users, $user1, $user2);

// print_r($users);
$email = $_POST["email"];
$password = $_POST["password"];

$login = false;
$login_name = "";
$login_role = "";

for ($i = 0; $i < count($users); $i++) {
    // echo $users[$i]["email"] . "<br>";

    if ($users[$i]["email"] == $email && $users[$i]["password"] == $password) {
        $login = true;
        $login_name = $users[$i]["name"];
        $login_role = $users[$i]["role"];
    } 

}

if ($login) {
    if ($login_role == "professor") {
        include("pagina_professor.php");
    } else {	
        include("pagina_aluno.php");
    } 
} else {
    echo "Login ou senha inválidos!";
}


// echo "Página: $page1 <br>";
// echo "Email: $email <br>";
// echo "Password: $password <br>";

