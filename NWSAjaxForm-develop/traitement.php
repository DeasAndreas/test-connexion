<?php
$chaine = serialize($_POST);

$fichier = fopen("test.txt", "w");
fputs($fichier, $chaine);
fclose($fichier);