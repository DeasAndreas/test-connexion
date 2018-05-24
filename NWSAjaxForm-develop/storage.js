function testStorage() {
    let nom    = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let mail   = document.getElementById('mail').value;
    let mdp     = document.getElementById('mdp').value;

    sessionStorage.setItem("Nom"   ,    nom);
    sessionStorage.setItem("Prenom", prenom);
    sessionStorage.setItem("Mail"  ,   mail);
    sessionStorage.setItem("Mdp"   ,    mdp);

}