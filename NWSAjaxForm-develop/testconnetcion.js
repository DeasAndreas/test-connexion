



function  testConnection {
    let nom = document.data.nom.value;
    let prenom = document.data.prenom.value;
    let mail = document.data.mail.value;
    let mdp = document.data.mdp.value;

    if (nom.length > 0 && prenom.length > 0 && mail.length > 0 && mdp.length > 0) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "traitement.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


        xhr.addEventListener("readystatechange", onreadystatechange, false);

        xhr.onreadystatechange = function onreadystatechange(e) {
            if(xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 304) {
                    console.log("connexion!");
                }
            }
        };

        let form = new FormData(document.forms[0]);

        xhr.send(form);

    }

    else {
        console.log("pas de connexion");
        sessionStorage.setItem("Nom"   ,    nom);
        sessionStorage.setItem("Prenom", prenom);
        sessionStorage.setItem("Mail"  ,   mail);
        sessionStorage.setItem("Mdp"   ,    mdp);
    }

}