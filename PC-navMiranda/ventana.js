// --- ventana.js ---
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

window.addEventListener("load", () => {
    modal.style.display = "block";
});

cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
