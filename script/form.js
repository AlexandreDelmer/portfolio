function submitForm() {
    var form = document.getElementById('contact-form');
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit_form.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Afficher le message dans le conteneur
            document.getElementById('message-container').innerHTML = xhr.responseText;
        } else {
            console.error('Une erreur s\'est produite lors de la soumission du formulaire.');
        }
    };
    xhr.send(formData);
}