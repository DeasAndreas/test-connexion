function validerForm() {
    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');
    let mail = document.getElementById('mail');
    let mdp = document.getElementById('mdp');

    if (nom.value.length > 0 && prenom.value.length > 0 && mail.value.length > 0 && mdp.value.length > 0) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "traitement.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 304) {
                    alert("connexion!");
                }
            }
        };

        let form = new FormData(document.forms[0]);

        xhr.send(form);
    }

    else {
        alert("pas de connexion");
        return false;
    }
}

