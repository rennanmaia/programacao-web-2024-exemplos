<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Login gerado em sala de aula</title>
</head>
<body>

    <header>
        <h1>Login de sala de aula</h1>
    </header>

    <main>
        <form action="main.php?page=home" method="POST">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" class="e-mail" required>
            <br>
            <label for="password">Senha:</label>
            <input type="password" name="password" id="password" required>

            <button type="submit">Entrar</button>
        </form>
    </main>

    <footer>
        <p>Desenvolvido em sala de aula.@Todos os direitos reservados.</p>
    </footer>
</body>
</html>