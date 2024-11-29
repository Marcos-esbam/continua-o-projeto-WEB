
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");


const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = item.src;
        captionText.textContent = item.alt;
    });
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
function toggleText(textId, button) {
    const textElement = document.getElementById(textId);
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
        button.textContent = "Ocultar Texto";
    } else {
        textElement.style.display = "none";
        button.textContent = "Mostrar Texto";
    }
}
