const nama = "Anselmus Erik";
let usia = 20;

let Bio = document.getElementById('Bio');
console.log(Bio);

function generateBio() {
    let generasi;

    if (usia >= 17 && usia <= 25) {
        generasi = "Generasi Remaja"
    }
    else if (usia <= 17 && usia >= 5) {
        generasi = "Generasi Bocil"
    }   
    else if (usia <= 5 && usia >= 0) {
        generasi = "Generasi Balita"
    }
    else {
        generasi = "Generasi Tua"
    }
    return Bio.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBio();

