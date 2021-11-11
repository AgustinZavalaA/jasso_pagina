<?php
    require 'layout/header.php';
    require 'bd_connection.php';
    $valid = false;
    if(isset($_POST['login'])){
        $user = $_POST['name'];
        $pass = $_POST['pass'];

        if(!validate_user_bd($user, $pass, $conn)){
            $valid = false;
        }else{
            session_start();
            $valid = true;
            $_SESSION['user'] = $user;
            header('Location:index.php');
        }
    }
?>
<section id="main">
    <h2>LOGIN</h2>
    <form action="" method="post">
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name">
        <br><br>
        <label for="pass">Contraseña</label>
        <input type="text" name="pass" id="pass">
        <br><br>
        <input type="submit" value="Entrar", name="login">
        <?php
            if(!$valid && isset($_POST['login'])){
                echo 'XD';
            }
        ?>
    </form>
</section>
<?php
    require 'layout/footer.php';
?>