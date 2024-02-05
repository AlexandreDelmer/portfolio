<?php

session_start();

$message = ""; // Ajout de la variable pour stocker le message

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs du formulaire
    $name = $_POST["name"];
    $email = $_POST["email"];
    $messageText = $_POST["message"];

    // Adresse email de destination
    $to = "contact@alexandredelmer.com";

    // Sujet de l'email
    $subject = "Nouveau message de $name";

    // Corps de l'email
    $body = "Nom: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$messageText";

    // En-têtes de l'email
    $headers = "From: $email";

    // Envoyer l'email
    $success = mail($to, $subject, $body, $headers);

    // Vérifier si l'email a été envoyé avec succès
    if ($success) {
        $message = "L'email a été envoyé avec succès.";
    } else {
        $message = "Erreur lors de l'envoi de l'email. Veuillez réessayer.";
    }

    $_SESSION['message'] = $message;
}
?>