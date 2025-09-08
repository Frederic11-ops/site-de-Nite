

function afficher(){
        // Sélectionnez l'élément où vous souhaitez ajouter le contenu
        var element = document.getElementById("contenu");
    
        // Ajoutez du contenu HTML à l'élément
        var tableauDeDonnees = [
        //['Apprendre le Catalan avec Nit', '0.jpg', 'Voici Nit, la plus belle chienne d\'Osseja qui va vous apprendre quelques mots de Catalan.'],
        ['Panxeta', '1.jpg', 'Ventre','Tout les ami(e)s de Nit aime bien lui carresser la panxeta. C\'est grace à de nombreuses heures de course dans la nature d\'Osseja, que Nit a pu conserver cetter ligne et avoir la plus jolie panxeta. Ne pas confondre avec panjeta, sinon Nit vous mordra les miches.'],
        ['Mel', '2.jpg', 'Miel','Nit utilise souvent la technique dite "ulls de mel"("les yeux de miels" en Français). Cela consiste a faire les plus beaux yeux afin d\'avoir d\'avantage de nourritures ou bien de se disculper quand des saucisses ont étrangement disparu de la cuisine.'],
        ['Llit', '3.jpg', 'Lit','Nit a beau être une chienne, elle n\'en reste pas moins une dame qui a besoin de beaucoup de confort. Elle a la passion des bons lits, c\'est pourquoi elle n\'hésite pas à tester tout les lits de la maison.'],
        ['Sabates','4.jpg','Chaussures','Pour faire plaisir a sa famille, Nit s\'est prêté à l\'exercice et a enfilé des chaussures. Mais Nit n\'a pas besoin de chaussures, elle est la plus grande coureuse d\'Osseja, rien ne peut courrir aussi vite qu\'elle.'],
        ['Nadal','5.jpg','Noël','Pour Noël, Nit a décidé de faire plaisir à sa famille et ses amis humains. Elle s\'est déguisé en renne uniquement pour faire plaisirs aux humains car Nit a une grande bonté d\'âme et adore l\'esprit de Noël.'],
        ['Platja','6.jpg','Plage','Nit aime bien se promener sur la plage, une vieille légende dit que la plage a été crée pour rendre hommage à la déesse Nitita']
        ];

        element.innerHTML ="";

        // Récupère la première cellule de chaque sous-tableau
        //noms = tableau des noms classés par ordre alphabétique
        var noms = tableauDeDonnees.map(item => item[0]);
        // Trie par ordre alphabétique
        noms.sort((a, b) => a.localeCompare(b));

        for (var i = 0; i < noms.length; i++) {
                var tableauDeDonneesRow = tableauDeDonnees.find(item => item[0] === noms[i]);
                element.innerHTML +='<div class="accordion-item    section-taupe  "><h2 class="accordion-header">';
                element.innerHTML +='<button class="accordion-button collapsed   section-taupe" type="button" data-bs-toggle="collapse" data-bs-target="#'+tableauDeDonneesRow[0]+'" aria-expanded="false" aria-controls="'+tableauDeDonneesRow[0]+'">'+tableauDeDonneesRow[0]+'</button>';
                element.innerHTML +='</h2><div id="'+tableauDeDonneesRow[0]+'" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body row"><img src="images/'+tableauDeDonneesRow[1]+'" alt="'+tableauDeDonneesRow[0]+'" class="img-fluid rounded shadow col-12 col-md-6 mb-4"><div class="col-12 col-md-6 mb-4"><h5>'+tableauDeDonneesRow[2]+'</h5><p>'+tableauDeDonneesRow[3]+'</p></div></div></div></div>';
        }
}


function afficherPresentation(){
        // Sélectionnez l'élément où vous souhaitez ajouter le contenu
        var element = document.getElementById("presentation");
    
        // Ajoutez du contenu HTML à l'élément
        var tableauDeDonneesPresentation = [
        //['Apprendre le Catalan avec Nit', '0.jpg', 'Voici Nit, la plus belle chienne d\'Osseja qui va vous apprendre quelques mots de Catalan.'],
        ['Apprendre le Catalan avec Nit'],
        ['Le catalan (en catalan : català) est une langue romane, parlée par environ 10 millions de personnes dans la partie orientale de l\'Espagne (\la Catalogne, la Communauté valencienne — localement nommé « valencien » —, aux Îles Baléares, et dans la Frange d\'Aragon), en Andorre et, dans une moindre proportion, en France (la majeure partie des Pyrénées-Orientales) et en Italie (la ville d\'Alghero en Sardaigne)..'],
        ['Nit qui est la plus jolie chienne du pays catalan. Elle prend bien soin des humains notemment de sa maitresse H. Elle a décidé d\'ouvrir ce site pour faire connaitre quelques mots de Catalan.']
        ];

        element.innerHTML ="<h2>"+tableauDeDonneesPresentation[0]+"</h2>";
        element.innerHTML +="<p>"+tableauDeDonneesPresentation[1]+"</p>";
        element.innerHTML +="<p>"+tableauDeDonneesPresentation[2]+"</p>";
}

function afficherMiseAJour(){
        // Sélectionnez l'élément où vous souhaitez ajouter le contenu
        var element = document.getElementById("maj");

        element.innerHTML ="<a>Dernière mise à jours : </a>";

        element.innerHTML +="<a>31 août 2025</a>";
        
}
document.addEventListener("DOMContentLoaded",afficherPresentation());
document.addEventListener("DOMContentLoaded",afficher());

document.addEventListener("DOMContentLoaded",afficherMiseAJour());


