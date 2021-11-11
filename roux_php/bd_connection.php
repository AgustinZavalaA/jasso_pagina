<?php
    $bd = 'roux';
    $servidor = 'localhost';
    $user = 'pmauser';
    $pass = '1234';

    $conn = mysqli_connect($servidor, $user, $pass, $bd);

    if(!$conn){
        die('Conexion fallo');
    }

    //echo "Conectado exitoso <br>";

    function validate_user_bd($user, $pass, $conn){
        $query = "select 1 as user_valido from users where name='$user' and password=MD5('$pass')";
        $result = $conn->query($query);

        if($result->num_rows == 0){
            return false;
        }else{
            return true;
        }
    }

    // if(validate_user_bd('admin', 'superadmin', $conn)){
    //     echo 'user in db';
    // }else{
    //     echo 'user not in db';
    // }
?>