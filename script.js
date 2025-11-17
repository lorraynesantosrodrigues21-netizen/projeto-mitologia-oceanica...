window.addEventListener("load", function () {
  alert("Bem-vindo ao Projeto Mitologia Oceânica! Prepare-se para mergulhar nessa aventura!");
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const titulo = document.querySelector("header h1");
titulo.addEventListener("mouseover", () => {
  titulo.style.color = "#1E90FF";
});
titulo.addEventListener("mouseout", () => {
  titulo.style.color = "#fff";
});
window.addEventListener('scroll', function onScroll() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // Remove o listener para não repetir
    window.removeEventListener('scroll', onScroll);
    setTimeout(() => {
      let gostou = confirm("Você gostou do nosso site?");
if (gostou) {
        let comentario = prompt("Que ótimo! Deixe seu comentário:");
        if (comentario && comentario.trim() !== "") {
          alert("Obrigado pelo seu comentário!");
          // Aqui você pode adicionar código para salvar o comentário, se quiser
        }
      } else {
        alert("Que pena! Obrigado pelo seu feedback.");
      }
    }, 500);
  }
});
