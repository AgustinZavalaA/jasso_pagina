<?php
    require 'layout/header.php';
    if(!isset($_SESSION['user'])){
        header('Location: login.php');
        exit;
    }
?>
<section id="main">
    <form action="" method="post">
        <input type="submit" value="Confirmar cerrar sesion" name="closesession">
    </form>
    <?php
        if(isset($_POST['closesession'])){
            echo 'XD';
            $_SESSION=array();
            session_destroy();
            header('Location:index.php');
        }
    ?>
</section>
<?php
    require 'layout/footer.php';
?>