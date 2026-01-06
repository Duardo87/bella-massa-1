// DADOSconst ADMIN_EMAIL = "admin@bellamassa.com";
const ADMIN_SENHA = "123456";

function loginAdmin() {
  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-pass").value;

  if (email === ADMIN_EMAIL && senha === ADMIN_SENHA) {
    localStorage.setItem("adminLogado", "true");
    document.getElementById("login-panel").style.display = "none";
    document.getElementById("admin-panel").classList.remove("hidden");
  } else {
    alert("❌ Email ou senha incorretos");
  }
}

document.getElementById("btn-login")?.addEventListener("click", loginAdmin);
let promo = JSON.parse(localStorage.getItem('promo')) || null;

// PROMOÇÃO
function savePromo() {
  promo = {
    title: promoTitle.value,
    desc: promoDesc.value,
    price: promoPrice.value,
    image: promoImage.value,
    time: promoTime.value * 60
  };
  localStorage.setItem('promo', JSON.stringify(promo));
  alert("Promoção salva!");
}

function showPromo() {
  if (!promo) return;
  promoModal.style.display = "flex";
  promoTitle.innerText = promo.title;
  promoDesc.innerText = promo.desc;
  promoPrice.innerText = promo.price;
  promoImage.src = promo.image;
  startCountdown(promo.time);
}

function startCountdown(seconds) {
  const el = document.getElementById("countdown");
  let s = seconds;
  setInterval(() => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    el.innerText = `⏰ ${m}:${sec.toString().padStart(2,"0")}`;
    s--;
  }, 1000);
}

function closePromo() {
  promoModal.style.display = "none";
}

function acceptPromo() {
  alert("Promo adicionada ao pedido!");
  closePromo();
}

// WHATS
function sendWhats() {
  window.open("https://wa.me/5562999999999");
}

window.onload = showPromo;// ===== EXPORTAR JSON =====
function exportarJSON() {
  const dados = {
    pizzaria: JSON.parse(localStorage.getItem("pizzaria") || "{}"),
    categorias: JSON.parse(localStorage.getItem("categorias") || "[]"),
    produtos: JSON.parse(localStorage.getItem("produtos") || "[]"),
    feedbacks: JSON.parse(localStorage.getItem("feedbacks") || "[]"),
    promocao: JSON.parse(localStorage.getItem("promocaoDia") || "{}"),
    combos: JSON.parse(localStorage.getItem("combos") || "[]")
  };

  const blob = new Blob([JSON.stringify(dados, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "backup-bella-massa.json";
  a.click();
  URL.revokeObjectURL(url);
}

// ===== IMPORTAR JSON =====
function importarJSON() {
  const input = document.getElementById("import-json");
  if (!input.files.length) {
    alert("Selecione um arquivo JSON");
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    const dados = JSON.parse(e.target.result);

    localStorage.setItem("pizzaria", JSON.stringify(dados.pizzaria || {}));
    localStorage.setItem("categorias", JSON.stringify(dados.categorias || []));
    localStorage.setItem("produtos", JSON.stringify(dados.produtos || []));
    localStorage.setItem("feedbacks", JSON.stringify(dados.feedbacks || []));
    localStorage.setItem("promocaoDia", JSON.stringify(dados.promocao || {}));
    localStorage.setItem("combos", JSON.stringify(dados.combos || []));

    alert("✅ Dados importados com sucesso!");
    location.reload();
  };

  reader.readAsText(input.files[0]);
}function carregarPromo() {
  const promo = JSON.parse(localStorage.getItem("promocaoDia"));
  if (!promo) return;

  document.getElementById("promo-img").src = promo.imagem;
  document.getElementById("promo-title").innerText = promo.titulo;
  document.getElementById("promo-desc").innerText = promo.descricao;
  document.getElementById("promo-price").innerText = "R$ " + promo.preco;
  document.getElementById("promo-overlay").classList.remove("hidden");

  let tempo = promo.tempo * 60;
  setInterval(() => {
    const min = Math.floor(tempo / 60);
    const sec = tempo % 60;
    document.getElementById("promo-timer").innerText =
      `⏰ Acaba em ${min}:${sec.toString().padStart(2, "0")}`;
    tempo--;
  }, 1000);
}

function fecharPromo() {
  document.getElementById("promo-overlay").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", carregarPromo);