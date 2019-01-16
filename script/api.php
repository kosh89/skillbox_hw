<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $date = date("d.m.Y H:i:s");

    $pdo = new PDO('mysql:host=localhost;dbname=skillbox', 'skillbox', 'skillbox');
    $stmt = $pdo->prepare("INSERT INTO orders (time, name, phone) VALUES ('$date', '$name', '$phone')");
    $stmt->execute();
    foreach ($stmt as $row) {
        echo $row['name'];
    }
?>