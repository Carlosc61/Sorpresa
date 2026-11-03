function mostrarSorpresa() {
    const sorpresa = document.getElementById("sorpresa");
    sorpresa.style.display = "block";
    sorpresa.scrollIntoView({ behavior: "smooth" });
    lanzarCorazones();
}

function lanzarCorazones() {
    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const corazon = document.createElement("div");
            corazon.className = "flotante";
            corazon.innerHTML = ["❤️", "💕", "💗", "💖"][Math.floor(Math.random() * 4)];
            corazon.style.left = Math.random() * 100 + "vw";
            corazon.style.fontSize = (15 + Math.random() * 25) + "px";
            document.body.appendChild(corazon);

            setTimeout(() => corazon.remove(), 7000);
        }, i * 100);
    }
}

// Corazones decorativos
setInterval(() => {
    const corazon = document.createElement("div");
    corazon.className = "flotante";
    corazon.innerHTML = "♥";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = "20px";
    document.body.appendChild(corazon);

    setTimeout(() => corazon.remove(), 7000);
}, 800);