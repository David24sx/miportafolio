
// Animaciones on-scroll (reveal)
const elements = document.querySelectorAll('.scroll-fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 0.6s ease-out";
    }
  });
});

elements.forEach(el => observer.observe(el));


document.querySelectorAll(".contact-card").forEach(card => {
  card.addEventListener("click", () => {
    const text = card.getAttribute("data-copy");
    
    navigator.clipboard.writeText(text).then(() => {
      // Show popup
      const popup = document.getElementById("copy-popup");
      popup.textContent = `"${text}" copiado ✅`;
      popup.classList.add("show");

      // Hide after 2 seconds
      setTimeout(() => {
        popup.classList.remove("show");
      }, 2000);
    }).catch(err => {
      console.error("Error al copiar: ", err);
    });
  });
});

