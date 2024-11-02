const artworks = [
    { title: "Œuvre 1", image: "url_oeuvre1.jpg" },
    { title: "Œuvre 2", image: "url_oeuvre2.jpg" },
    // Ajoute d'autres œuvres ici
];

const gallery = document.getElementById('gallery');

artworks.forEach(artwork => {
    const div = document.createElement('div');
    div.className = 'artwork';
    div.innerHTML = `<h2>${artwork.title}</h2><img src="${artwork.image}" alt="${artwork.title}">`;
    gallery.appendChild(div);
});
