<?php

    $enviro = 'localhost';
    $uname = 'root';
    $password = ''; 
    $db = 'portfolio';

    $connect = new mysqli($enviro, $uname, $password, $db);

    if(mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

?>