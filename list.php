<?php
    $pdo = new PDO('mysql:host=localhost;dbname=skillbox', 'skillbox', 'skillbox');
    $stmt = $pdo->prepare('SELECT time, name, phone FROM orders');
    $stmt->execute();
    foreach ($stmt as $row) {
        echo '<pre>' .  $row['time'] . ' | ' . $row['name'] . ' | ' . $row['phone'] . '</pre>';
    }
?>