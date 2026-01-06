// DADOS
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

window.onload = showPromo;