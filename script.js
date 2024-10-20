
<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if(name && email && message) {
            document.getElementById('responseMessage').innerText = "Merci, " + name + ". Votre message a été envoyé.";
        } else {
            document.getElementById('responseMessage').innerText = "Veuillez remplir tous les champs.";
        }
    });
</script>
