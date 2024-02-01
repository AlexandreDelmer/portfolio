<?php
$servername = "ns1.dns-parking.com";  // L'adresse du serveur de base de données
$username = "u402288543_Alex"; // Votre nom d'utilisateur de la base de données
$password = "kX8E/1~Ea"; // Votre mot de passe de la base de données
$dbname = "u402288543_portfolio_form"; // Le nom de votre base de données

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}

// Récupérer les données du formulaire
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Enregistrez les données dans la base de données
$sql = "INSERT INTO nom_de_votre_table (nom, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => "Erreur lors de l'insertion des données : " . $conn->error]);
}

// Fermer la connexion à la base de données
$conn->close();
?>