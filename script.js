let pedido = [];
let total = 0;
let localizacao = "";

function addPizza(nome, preco) {
  pedido.push(`${nome} - R$ ${preco}`);
  total += preco;
  alert(nome + " adicionada!");
}

function pegarLocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      localizacao = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
      document.getElementById("local").innerText = "Localização capturada ✔️";
    });
  } else {
    alert("Localização não suportada");
  }
}

function finalizarPedido() {
  if (pedido.length === 0) {
    alert("Escolha uma pizza");
    return;
  }

  let msg = "🍕 *NOVO PEDIDO* %0A%0A";
  pedido.forEach(p => msg += `• ${p}%0A`);
  msg += `%0A💰 *Total:* R$ ${total}`;
  msg += `%0A📝 *Obs:* ${document.getElementById("obs").value}`;
  msg += `%0A📍 *Local:* ${localizacao}`;

  const whatsapp = "5562999999999"; // TROQUE PELO SEU
  window.open(`https://wa.me/${whatsapp}?text=${msg}`, "_blank");
}