<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $date = date("d.m.Y H:i:s");

    $pdo = new PDO('mysql:host=localhost;dbname=skillbox', 'skillbox', 'skillbox');
    $stmt = $pdo->prepare("INSERT INTO orders (time, name, phone) VALUES ('20198', 'ssddddd', '4822023')");
    $stmt->execute();
    foreach ($stmt as $row) {
        echo $row['name'];
    }
?>