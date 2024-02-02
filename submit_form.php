<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs du formulaire
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Adresse email de destination
    $to = "alexandredelmer.com";

    // Sujet de l'email
    $subject = "Nouveau message de $name";

    // Corps de l'email
    $body = "Nom: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // En-têtes de l'email
    $headers = "From: $email";

    // Envoyer l'email
    $success = mail($to, $subject, $body, $headers);

    // Vérifier si l'email a été envoyé avec succès
    if ($success) {
        echo "L'email a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi de l'email. Veuillez réessayer.";
    }
}
?>
