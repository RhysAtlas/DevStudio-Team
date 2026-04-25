// Scroll via botão
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  }

  // Botão voltar ao topo
  const btn = document.getElementById("topBtn");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
  
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  // Validação do formulário
  const form = document.getElementById("form");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
  
    if (nome === "" || email === "") {
      alert("Preencha todos os campos!");
      return;
    }
  
    alert("Mensagem enviada com sucesso!");
  });