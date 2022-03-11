class Tshirt {
    constructor(nom, couleur, taille, image) {
        this.nom = nom 
        this.couleur = couleur
        this.taille = taille 
        this.image = image
    }
}

let tshirts = [];
tshirts.push(new Tshirt('stalin', 'rouge', 'xxl', 'https://www.boxing-shop.com/media/cache/default_product_zoom/media/porduits/everlast_228537_807580-60_4_20200821T134426_01.jpg'))
tshirts.push(new Tshirt('bob', 'bleu', 'm', 'https://www.epideloire.fr/wn/files/e-commerce/product-photo/photo.2128.jpeg'))
tshirts.push(new Tshirt('kevin', 'jaune', 'l', 'https://www.cdiscount.com/pdt2/9/9/5/1/700x700/mp02691995/rw/t-shirt-jaune-mixte-homme-femme-sc221-100-coton-c.jpg'))

let size = new Set();
let color = new Set();

for(let t of tshirts){
    size.add(t.taille)
    color.add(t.couleur)
}


function FT(tabDeTshirts, taille){
    return tabDeTshirts.filter( t => t.taille === taille)
}

function FC(tabDeTshirts, couleur){
    return tabDeTshirts.filter( t => t.couleur === couleur)
}

////////////////////////////////////////////////////////////////

let tshirtsF = tshirts

const divProduit = document.getElementById("produits")

function affichageTshirt(tshirts) {
    divProduit.innerHTML = ""
    for(let t of tshirts) {
        let html = `
            <div class="produit flex">
                <h2>${t.nom}</h2>
                <img src="${t.image}" alt="">
                <div class="attribut taille">${t.taille}</div>
                <div class="attribut couleur">${t.couleur}</div>
            </div>`;

            divProduit.innerHTML += html;
    }
}


const divSize = document.getElementById('trieParTaille')
function affichageSize(size) {
    divSize.innerHTML = ""
    for(let s of size){
        let div = document.createElement('div')
        div.classList.add('btn')
        div.setAttribute('size', s)
        div.innerText = s
        divSize.appendChild(div)
        div.addEventListener('click', (e) => {
            let tailleVoulue = e.target.getAttribute('size')
            affichageTshirt(FT(tshirtsF, tailleVoulue))
        })
    }
}

const divCouleur = document.getElementById('trieParCouleur')
function affichageCouleur(tabCouleur) {
    divCouleur.innerHTML = ""
    for(let couleur of tabCouleur){
        let div = document.createElement('div')
        div.classList.add('btn')
        div.setAttribute('couleur', couleur)
        div.innerText = couleur
        divCouleur.appendChild(div)
        div.addEventListener('click', (e) => {
            let couleurVoulue = e.target.getAttribute('couleur')
            affichageTshirt(FC(tshirtsF, couleurVoulue))
        })
    }
}

affichageTshirt(tshirts)
affichageSize(size)
affichageCouleur(color)

document.getElementById('reset').addEventListener('click', (e) => {
    tshirtsF = tshirts
    affichageTshirt(tshirtsF)
})


