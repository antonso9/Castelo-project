
const artworks = [
    { title: "Œuvre 1", image: "oeuvre_maxoeuf.jpg" },
    { title: "Œuvre 2", image: "oeuvre_tim.jpg" },
    // Ajoute d'autres œuvres ici
];

const gallery = document.getElementById('gallery');

artworks.forEach(artwork => {
    const div = document.createElement('div');
    div.className = 'artwork';
    div.innerHTML = `<h2>${artwork.title}</h2><img src="${artwork.image}" alt="${artwork.title}">`;
    gallery.appendChild(div);
});




