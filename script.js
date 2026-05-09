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

  // CARROSSEL DE DEPOIMENTOS

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide++;

  if(currentSlide >= testimonials.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// autoplay
setInterval(nextSlide, 4000);

// clique nas bolinhas
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});