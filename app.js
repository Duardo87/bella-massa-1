const telefone = "5562993343622";
let carrinho = [];

/* PROMO DO DIA (ADMIN) */
function carregarPromo() {
  const promo = JSON.parse(localStorage.getItem("promoDia"));
  if (!promo) {
    fecharPromo();
    return;
  }

  document.getElementById("promo-titulo").innerText = promo.titulo;
  document.getElementById("promo-texto").innerText = promo.texto;

  if (promo.foto) {
    const img = document.getElementById("promo-foto");
    img.src = promo.foto;
    img.style.display = "block";
  }

  iniciarContador();
}

function iniciarContador() {
  const fim = new Date();
  fim.setHours(23,59,59);
  setInterval(() => {
    const diff = fim - new Date();
    if (diff <= 0) return;
    const h = Math.floor(diff/3600000);
    const m = Math.floor(diff/60000)%60;
    const s = Math.floor(diff/1000)%60;
    document.getElementById("contador").innerText =
      `⏰ Termina em ${h}h ${m}m ${s}s`;
  }, 1000);
}

function fecharPromo() {
  document.getElementById("promo-dia").style.display = "none";
}

function aproveitarPromo() {
  fecharPromo();
  window.open(
    `https://wa.me/${telefone}?text=` +
    encodeURIComponent(
      document.getElementById("promo-titulo").innerText + "\n" +
      document.getElementById("promo-texto").innerText
    )
  );
}

/* COMBOS */
const combos = [
  { nome:"Combo Individual", preco:39.9 },
  { nome:"Combo Casal", preco:59.9 },
  { nome:"Combo Família", preco:99.9 }
];

function renderCombos() {
  const div = document.getElementById("combos");
  combos.forEach(c => {
    div.innerHTML += `
      <div class="combo">
        <span class="badge">⭐ Mais Pedido</span>
        <h3>${c.nome}</h3>
        <strong>R$ ${c.preco.toFixed(2)}</strong>
        <button onclick="addItem('${c.nome}',${c.preco})">Adicionar</button>
      </div>
    `;
  });
}

/* PRODUTOS EXEMPLO */
const produtos = [
  { nome:"Pizza Mussarela", preco:29.9, destaque:true },
  { nome:"Pizza Calabresa", preco:32.9 },
  { nome:"Pizza Frango", preco:34.9 }
];

function renderProdutos() {
  const div = document.getElementById("produtos");
  produtos.forEach(p => {
    div.innerHTML += `
      <div class="card">
        ${p.destaque ? '<span class="badge">⭐ Mais Pedida</span>' : ''}
        <h3>${p.nome}</h3>
        <strong>R$ ${p.preco.toFixed(2)}</strong>
        <button onclick="addItem('${p.nome}',${p.preco})">Adicionar</button>
      </div>
    `;
  });
}

function addItem(nome, preco) {
  carrinho.push({ nome, preco });
  alert("Adicionado ao pedido");
}

/* RESUMO */
function abrirResumo() {
  const lista = document.getElementById("resumo-itens");
  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach(i => {
    lista.innerHTML += `<p>• ${i.nome} - R$ ${i.preco}</p>`;
    total += i.preco;
  });

  document.getElementById("resumo-total").innerText =
    "Total: R$ " + total.toFixed(2);

  document.getElementById("resumo").style.display = "flex";
}

function fecharResumo() {
  document.getElementById("resumo").style.display = "none";
}

function confirmarPedido() {
  let texto = "🧾 Pedido Bella Massa\n\n";
  let total = 0;

  carrinho.forEach(i => {
    texto += `• ${i.nome} - R$ ${i.preco}\n`;
    total += i.preco;
  });

  texto += `\n💰 Total: R$ ${total.toFixed(2)}`;

  window.open(
    `https://wa.me/${telefone}?text=` +
    encodeURIComponent(texto)
  );
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
  carregarPromo();
  renderCombos();
  renderProdutos();
});