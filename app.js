/* app.js - Pizzaria demo com admin localStorage
   Salve como app.js e vincule nas páginas.
*/

(function(){
  // ---------- Config padrão e helpers ----------
  const STORAGE_KEY = 'pizzaria_data_v1';

  const DEFAULT = {
    name: "Sua Pizzaria",
    phone: "+55 11 99999-9999",
    categories: [
      { id: 'cat-1', name: 'Tradicionais' },
      { id: 'cat-2', name: 'Especiais' },
      { id: 'cat-3', name: 'Bebidas' }
    ],
    products: [{
  "name": "Pizzaria do Bairro",
  "phone": "+55 11 99999-9999",
  "categories": [
    { "id": "cat-1", "name": "Destaques / Combos" },
    { "id": "cat-2", "name": "Tradicionais" },
    { "id": "cat-3", "name": "Especiais" },
    { "id": "cat-4", "name": "Porções & Acompanhamentos" },
    { "id": "cat-5", "name": "Bebidas" },
    { "id": "cat-6", "name": "Sobremesas" }
  ],
  "products": [
    { "id": "p-101", "categoryId": "cat-1", "name": "Individual Rápido — Margherita (M) + Coca 350ml", "price": 43.15, "image": "", "description": "Combo individual: Margherita média + Coca 350ml. Rápido e prático.", "available": true },
    { "id": "p-102", "categoryId": "cat-1", "name": "Combo Casal — 2 Médias + Coca 2L", "price": 78.03, "image": "", "description": "2 pizzas médias (sugestão: Margherita + Calabresa) + Coca 2L. Ótimo para dois.", "available": true },
    { "id": "p-103", "categoryId": "cat-1", "name": "Combo Família — 2 Grandes + 2x Coca 2L + Fritas", "price": 153.18, "image": "", "description": "Perfeito para a família (3–4 pessoas). Economize comprando o combo.", "available": true },
    { "id": "p-104", "categoryId": "cat-1", "name": "Combo Festa — 4 Grandes + 6x Coca350 + Sobremesas", "price": 279.71, "image": "", "description": "Pacote festa com 4 pizzas grandes, bebidas e sobremesas.", "available": true },
    { "id": "p-105", "categoryId": "cat-1", "name": "Combo Econômico — 1 Grande + 2x Coca350", "price": 65.61, "image": "", "description": "Opção econômica para 1-2 pessoas.", "available": true },
    
    { "id": "p-201", "categoryId": "cat-2", "name": "Margherita — Média", "price": 39.90, "image": "", "description": "Molho de tomate, muçarela e manjericão.", "available": true },
    { "id": "p-202", "categoryId": "cat-2", "name": "Margherita — Grande", "price": 59.90, "image": "", "description": "Molho de tomate, muçarela e manjericão.", "available": true },
    { "id": "p-203", "categoryId": "cat-2", "name": "Calabresa — Média", "price": 39.90, "image": "", "description": "Calabresa fatiada, cebola e orégano.", "available": true },
    { "id": "p-204", "categoryId": "cat-2", "name": "Calabresa — Grande", "price": 59.90, "image": "", "description": "Calabresa fatiada, cebola e orégano.", "available": true },
    
    { "id": "p-301", "categoryId": "cat-3", "name": "4 Queijos — Média", "price": 49.90, "image": "", "description": "Muçarela, parmesão, gorgonzola e catupiry.", "available": true },
    { "id": "p-302", "categoryId": "cat-3", "name": "4 Queijos — Grande", "price": 74.90, "image": "", "description": "Muçarela, parmesão, gorgonzola e catupiry.", "available": true },
    { "id": "p-303", "categoryId": "cat-3", "name": "Pepperoni — Média", "price": 44.90, "image": "", "description": "Fatias de pepperoni e muito sabor.", "available": true },
    { "id": "p-304", "categoryId": "cat-3", "name": "Pepperoni — Grande", "price": 69.90, "image": "", "description": "Fatias de pepperoni e muito sabor.", "available": true },
    { "id": "p-305", "categoryId": "cat-3", "name": "Frango com Catupiry — Média", "price": 44.90, "image": "", "description": "Frango desfiado e catupiry cremoso.", "available": true },
    { "id": "p-306", "categoryId": "cat-3", "name": "Frango com Catupiry — Grande", "price": 69.90, "image": "", "description": "Frango desfiado e catupiry cremoso.", "available": true },
    { "id": "p-307", "categoryId": "cat-3", "name": "Vegetariana — Média", "price": 38.90, "image": "", "description": "Legumes grelhados, queijo e molho especial.", "available": true },
    { "id": "p-308", "categoryId": "cat-3", "name": "Vegetariana — Grande", "price": 58.90, "image": "", "description": "Legumes grelhados, queijo e molho especial.", "available": true },
    { "id": "p-309", "categoryId": "cat-3", "name": "Bacon Supreme — Média", "price": 49.90, "image": "", "description": "Bacon crocante e queijo extra.", "available": true },
    { "id": "p-310", "categoryId": "cat-3", "name": "Bacon Supreme — Grande", "price": 74.90, "image": "", "description": "Bacon crocante e queijo extra.", "available": true },
    
    { "id": "p-401", "categoryId": "cat-4", "name": "Fritas (porção)", "price": 18.00, "image": "", "description": "Porção de batata frita crocante.", "available": true },
    { "id": "p-402", "categoryId": "cat-4", "name": "Onion Rings (porção)", "price": 22.00, "image": "", "description": "Anéis de cebola crocantes.", "available": true },
    { "id": "p-403", "categoryId": "cat-4", "name": "Chicken Wings (6 uni.)", "price": 26.00, "image": "", "description": "Asinhas temperadas e assadas.", "available": true },
    
    { "id": "p-501", "categoryId": "cat-5", "name": "Coca-Cola 350ml", "price": 6.50, "image": "", "description": "Refrigerante gelado.", "available": true },
    { "id": "p-502", "categoryId": "cat-5", "name": "Coca-Cola 2L", "price": 12.00, "image": "", "description": "Bebida para compartilhar.", "available": true },
    { "id": "p-503", "categoryId": "cat-5", "name": "Suco Natural 300ml", "price": 8.50, "image": "", "description": "Suco natural da estação.", "available": true },
    { "id": "p-504", "categoryId": "cat-5", "name": "Água 500ml", "price": 4.50, "image": "", "description": "Água mineral.", "available": true },
    
    { "id": "p-601", "categoryId": "cat-6", "name": "Pudim (fatia)", "price": 14.00, "image": "", "description": "Pudim cremoso caseiro.", "available": true },
    { "id": "p-602", "categoryId": "cat-6", "name": "Brownie (un)", "price": 16.00, "image": "", "description": "Brownie com pedaços de chocolate.", "available": true }
  ],
  "feedbacks": [
    { "id": "f-1", "name": "João", "text": "Entrega rápida e pizza deliciosa!", "date": "2025-11-08" }
  ]
}],
    feedbacks: [
      { id: 'f-1', name: 'João', text: 'Entrega rápida e pizza deliciosa!', date: new Date().toISOString().slice(0,10) }
    ]
  };

  function readData(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT));
        return JSON.parse(JSON.stringify(DEFAULT));
      }
      return JSON.parse(raw);
    }catch(e){
      console.error('Erro lendo dados', e);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT));
      return JSON.parse(JSON.stringify(DEFAULT));
    }
  }

  function saveData(data){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function newId(prefix='id'){ return prefix + '-' + Date.now() + '-' + Math.floor(Math.random()*9000) }

  // ---------- Render público ----------
  function renderPublic(){
    const data = readData();
    // header
    const nameEl = document.getElementById('pizzeria-name');
    const phoneEl = document.getElementById('pizzeria-phone');
    const telLink = document.getElementById('tel-link');
    if(nameEl) nameEl.textContent = data.name || 'Sua Pizzaria';
    if(telLink){
      telLink.textContent = data.phone || '';
      telLink.href = 'tel:' + (data.phone || '').replace(/\s/g,'');
    }

    // categories
    const categoriesList = document.getElementById('categories-list');
    if(categoriesList){
      categoriesList.innerHTML = '';
      data.categories.forEach((c, idx) => {
        const li = document.createElement('li');
        li.textContent = c.name;
        li.dataset.id = c.id;
        if(idx === 0) li.classList.add('active');
        li.addEventListener('click', () => {
          document.querySelectorAll('#categories-list li').forEach(n => n.classList.remove('active'));
          li.classList.add('active');
          renderProducts(c.id);
        });
        categoriesList.appendChild(li);
      });
      // render primeira categoria
      if(data.categories.length) renderProducts(data.categories[0].id);
    }

    // feedbacks
    renderFeedbacks();
  }

  function renderProducts(categoryId){
    const data = readData();
    const grid = document.getElementById('products-grid');
    if(!grid) return;
    const products = data.products.filter(p => p.categoryId === categoryId);
    grid.innerHTML = '';
    if(products.length === 0){
      grid.innerHTML = '<div class="card small-muted">Nenhum produto nesta categoria.</div>';
      return;
    }
    products.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product-card';
      const img = document.createElement('img');
      img.src = p.image || 'https://via.placeholder.com/600x400?text=Pizza';
      img.alt = p.name;
      const h = document.createElement('h4');
      h.textContent = p.name;
      const desc = document.createElement('div');
      desc.className = 'small-muted';
      desc.textContent = p.description || '';
      const price = document.createElement('div');
      price.className = 'price';
      price.textContent = 'R$ ' + Number(p.price).toFixed(2).replace('.',',');
      const actions = document.createElement('div');
      actions.className = 'actions';
      const btnView = document.createElement('button');
      btnView.className = 'btn';
      btnView.textContent = 'adiciona';
      btnView.addEventListener('click', () => openProductModal(p));
      actions.appendChild(btnView);

      card.appendChild(img);
      card.appendChild(h);
      card.appendChild(desc);
      card.appendChild(price);
      card.appendChild(actions);
      grid.appendChild(card);
    });
  }

  function openProductModal(product){
    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');
    const close = document.getElementById('modal-close');
    if(!modal || !body) return;
    body.innerHTML = `
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <img src="${product.image || 'https://via.placeholder.com/800x500?text=Pizza'}" style="width:320px;max-width:100%;border-radius:8px" />
        <div style="flex:1">
          <h2>${product.name}</h2>
          <p class="small-muted">${product.description || ''}</p>
          <p style="font-weight:700;margin-top:12px">R$ ${Number(product.price).toFixed(2).replace('.',',')}</p>
          <p style="margin-top:16px">
            <a href="tel:${(readData().phone||'').replace(/\s/g,'')}" class="btn">Pedir pelo telefone</a>
          </p>
        </div>
      </div>
    `;
    modal.classList.remove('hidden');
    close.onclick = () => modal.classList.add('hidden');
    modal.onclick = (e) => { if(e.target === modal) modal.classList.add('hidden'); };
  }

  function renderFeedbacks(){
    const data = readData();
    const list = document.getElementById('feedback-list');
    if(!list) return;
    list.innerHTML = '';
    if(!data.feedbacks || data.feedbacks.length === 0){
      list.innerHTML = '<div class="small-muted">Ainda não há feedbacks.</div>';
      return;
    }
    data.feedbacks.slice().reverse().forEach(f => {
      const item = document.createElement('div');
      item.className = 'feedback-item';
      item.innerHTML = `<div class="name">${f.name} <span class="small-muted">• ${f.date}</span></div><div>${f.text}</div>`;
      list.appendChild(item);
    });
  }

  // ---------- Admin ----------
  const ADMIN_EMAIL = 'admin@pizzaria.local';
  const ADMIN_PASS  = 'admin123';

  function initAdmin(){
    const loginPanel = document.getElementById('login-panel');
    const adminPanel = document.getElementById('admin-panel');
    const btnLogin = document.getElementById('btn-login');
    const btnLogout = document.getElementById('btn-logout');

    // login
    btnLogin.addEventListener('click', () =>{
      const email = document.getElementById('login-email').value.trim();
      const pass = document.getElementById('login-pass').value;
      if(email === ADMIN_EMAIL && pass === ADMIN_PASS){
        loginPanel.classList.add('hidden');
        adminPanel.classList.remove('hidden');
        loadAdmin();
      } else {
        alert('Credenciais incorretas.');
      }
    });

    btnLogout.addEventListener('click', () => {
      adminPanel.classList.add('hidden');
      loginPanel.classList.remove('hidden');
    });
  }

  function loadAdmin(){
    // load store data
    const data = readData();
    document.getElementById('admin-name').value = data.name || '';
    document.getElementById('admin-phone').value = data.phone || '';

    document.getElementById('save-store').onclick = () => {
      const d = readData();
      d.name = document.getElementById('admin-name').value.trim() || 'Sua Pizzaria';
      d.phone = document.getElementById('admin-phone').value.trim() || '';
      saveData(d);
      alert('Dados salvos.');
      // atualiza página pública (se aberta)
    };

    renderAdminCategories();
    renderAdminProducts();
    renderAdminFeedbacks();
    setupExportImport();
  }

  // Categories admin
  function renderAdminCategories(){
    const data = readData();
    const wrap = document.getElementById('categories-admin');
    wrap.innerHTML = '';
    data.categories.forEach(cat => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.gap = '8px';
      row.style.marginTop = '8px';
      row.innerHTML = `<input value="${cat.name}" data-id="${cat.id}" class="cat-name" /><button class="btn edit-cat">Salvar</button><button class="btn ghost del-cat">Excluir</button>`;
      wrap.appendChild(row);

      row.querySelector('.edit-cat').onclick = () => {
        const newName = row.querySelector('.cat-name').value.trim();
        if(!newName) return alert('Nome inválido');
        const d = readData();
        const c = d.categories.find(x=>x.id===cat.id);
        if(c) c.name = newName;
        saveData(d);
        alert('Categoria atualizada');
        renderAdminCategories();
      };
      row.querySelector('.del-cat').onclick = () => {
        if(!confirm('Excluir categoria? Produtos nessa categoria serão mantidos sem categoria.')) return;
        const d = readData();
        d.categories = d.categories.filter(x=>x.id!==cat.id);
        // optional: set products categoryId to null
        d.products.forEach(p => { if(p.categoryId === cat.id) p.categoryId = null; });
        saveData(d);
        renderAdminCategories();
        renderAdminProducts();
      };
    });

    document.getElementById('add-category').onclick = () => {
      const name = document.getElementById('new-category-name').value.trim();
      if(!name) return alert('Digite o nome da categoria');
      const d = readData();
      d.categories.push({ id: newId('cat'), name });
      saveData(d);
      document.getElementById('new-category-name').value = '';
      renderAdminCategories();
      renderAdminProducts();
    };
  }

  // Products admin
  function renderAdminProducts(){
    const data = readData();
    const wrap = document.getElementById('products-admin');
    wrap.innerHTML = '';
    if(data.products.length === 0) wrap.innerHTML = '<div class="small-muted">Nenhum produto.</div>';

    data.products.slice().reverse().forEach(p => {
      const row = document.createElement('div');
      row.className = 'card';
      row.style.display='flex';
      row.style.alignItems='center';
      row.style.gap='12px';
      row.innerHTML = `
        <img src="${p.image || 'https://via.placeholder.com/120x80?text=Img'}" style="width:120px;height:80px;object-fit:cover;border-radius:6px" />
        <div style="flex:1">
          <strong>${p.name}</strong><div class="small-muted">${(getCategoryName(p.categoryId) || 'Sem categoria')} • R$ ${Number(p.price).toFixed(2).replace('.',',')}</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn edit-product">Editar</button>
          <button class="btn ghost del-product">Excluir</button>
        </div>
      `;
      wrap.appendChild(row);

      row.querySelector('.edit-product').onclick = () => openProductEditModal(p.id);
      row.querySelector('.del-product').onclick = () => {
        if(!confirm('Excluir produto?')) return;
        const d = readData();
        d.products = d.products.filter(x=>x.id !== p.id);
        saveData(d);
        renderAdminProducts();
      };
    });

    document.getElementById('add-product-btn').onclick = () => openProductEditModal();
  }

  function getCategoryName(catId){
    const d = readData();
    const c = d.categories.find(x=>x.id===catId);
    return c ? c.name : null;
  }

  function openProductEditModal(productId){
    const modal = document.getElementById('product-edit-modal');
    const body = document.getElementById('product-edit-body');
    const close = document.getElementById('edit-modal-close');
    const d = readData();
    let p = productId ? d.products.find(x=>x.id===productId) : null;
    const categoriesOptions = d.categories.map(c=>`<option value="${c.id}">${c.name}</option>`).join('');

    body.innerHTML = `
      <h3>${p ? 'Editar produto' : 'Novo produto'}</h3>
      <label>Nome<input id="e-name" value="${p ? escapeHtml(p.name) : ''}" /></label>
      <label>Descrição<textarea id="e-desc">${p ? escapeHtml(p.description) : ''}</textarea></label>
      <label>Preço (ex: 29.90)<input id="e-price" type="number" step="0.01" value="${p ? p.price : ''}" /></label>
      <label>Categoria
        <select id="e-cat">
          <option value="">-- Sem categoria --</option>
          ${categoriesOptions}
        </select>
      </label>
      <label>Imagem (URL)<input id="e-img" value="${p ? escapeHtml(p.image) : ''}" /></label>
      <label><input id="e-available" type="checkbox" ${p && p.available ? 'checked' : ''} /> Disponível</label>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button id="save-product" class="btn">${p ? 'Salvar' : 'Criar'}</button>
        <button id="cancel-product" class="btn ghost">Cancelar</button>
      </div>
    `;
    // set selected category
    setTimeout(()=> {
      if(p && p.categoryId) document.getElementById('e-cat').value = p.categoryId;
    },10);

    modal.classList.remove('hidden');
    close.onclick = () => modal.classList.add('hidden');
    modal.onclick = (e) => { if(e.target === modal) modal.classList.add('hidden'); };

    document.getElementById('cancel-product').onclick = () => modal.classList.add('hidden');
    document.getElementById('save-product').onclick = () => {
      const name = document.getElementById('e-name').value.trim();
      const desc = document.getElementById('e-desc').value.trim();
      const price = parseFloat(document.getElementById('e-price').value) || 0;
      const cat = document.getElementById('e-cat').value || null;
      const img = document.getElementById('e-img').value.trim();
      const available = document.getElementById('e-available').checked;

      if(!name) return alert('Nome é obrigatório');
      const data = readData();
      if(p){
        // editar
        const prod = data.products.find(x=>x.id===p.id);
        prod.name = name; prod.description = desc; prod.price = price; prod.categoryId = cat; prod.image = img; prod.available = !!available;
      } else {
        data.products.push({
          id: newId('p'),
          name, description: desc, price, categoryId: cat, image: img, available: !!available
        });
      }
      saveData(data);
      renderAdminProducts();
      modal.classList.add('hidden');
    };
  }

  function escapeHtml(s=''){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  // Feedbacks
  function renderAdminFeedbacks(){
    const data = readData();
    const wrap = document.getElementById('feedbacks-admin');
    wrap.innerHTML = '';
    if(!data.feedbacks || data.feedbacks.length === 0) wrap.innerHTML = '<div class="small-muted">Nenhum feedback.</div>';
    data.feedbacks.slice().reverse().forEach(f => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<strong>${f.name}</strong> <div class="small-muted">${f.date}</div><p>${f.text}</p><div style="text-align:right"><button class="btn ghost del-fb">Excluir</button></div>`;
      wrap.appendChild(div);
      div.querySelector('.del-fb').onclick = () => {
        if(!confirm('Excluir feedback?')) return;
        const d = readData();
        d.feedbacks = d.feedbacks.filter(x=>x.id !== f.id);
        saveData(d);
        renderAdminFeedbacks();
      };
    });

    document.getElementById('add-feedback').onclick = () => {
      const name = document.getElementById('new-feedback-name').value.trim();
      const text = document.getElementById('new-feedback-text').value.trim();
      if(!name || !text) return alert('Preencha nome e comentário');
      const d = readData();
      d.feedbacks.push({ id: newId('f'), name, text, date: new Date().toISOString().slice(0,10) });
      saveData(d);
      document.getElementById('new-feedback-name').value = '';
      document.getElementById('new-feedback-text').value = '';
      renderAdminFeedbacks();
    };
  }

  // Export / Import
  function setupExportImport(){
    document.getElementById('export-json').onclick = () => {
      const data = readData();
      const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'pizzaria-data.json'; document.body.appendChild(a); a.click();
      setTimeout(()=>{ URL.revokeObjectURL(url); a.remove(); },1000);
    };
    document.getElementById('import-file').onchange = (e) => {
      const f = e.target.files[0];
      if(!f) return;
      const reader = new FileReader();
      reader.onload = function(evt){
        try{
          const parsed = JSON.parse(evt.target.result);
          if(!confirm('Substituir dados atuais pelos dados importados?')) return;
          saveData(parsed);
          alert('Importado com sucesso. Recarregue a página pública para ver as alterações.');
          // reload admin UI
          loadAdmin();
        }catch(err){
          alert('Arquivo inválido');
        }
      };
      reader.readAsText(f);
    };
  }

  // Expose public functions
  window.app = {
    renderPublic,
    initAdmin,
    // helpers for manual testing
    readData,
    saveData
  };
})();// =========================
// PEDIDO + WHATSAPP
// =========================
let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(product.name + " adicionado ao pedido");
}

function getCartText() {
  let total = 0;
  let text = "🍕 *Pedido - " + readData().name + "*\n\n";
  cart.forEach((p, i) => {
    total += p.price;
    text += `${i+1}. ${p.name} — R$ ${p.price.toFixed(2)}\n`;
  });
  text += `\n💰 *Total:* R$ ${total.toFixed(2)}\n\n📍 Endereço:\n📞 Telefone:`;
  return encodeURIComponent(text);
}

function sendToWhatsApp() {
  if (cart.length === 0) {
    alert("Seu pedido está vazio");
    return;
  }
  const phone = readData().phone.replace(/\D/g, '');
  const url = `https://wa.me/55${phone}?text=${getCartText()}`;
  window.open(url, "_blank");
}const combos = [
  {
    name: "🍕 Combo Casal",
    items: ["Pizza Grande", "Refrigerante 2L"],
    price: 69.90
  },
  {
    name: "🍕 Combo Família",
    items: ["2 Pizzas Grandes", "Refrigerante 2L"],
    price: 119.90
  }
];function addCombo(name, price) {
  cart.push({ name, price });
  alert(name + " adicionado!");
}const ADICIONAIS = [
  { nome: "Borda Recheada", preco: 5 },
  { nome: "Extra Queijo", preco: 4 },
  { nome: "Catupiry", preco: 4 }
];

function abrirAdicionais() {
  let html = "<h3>Deseja adicionar algo?</h3>";
  
  ADICIONAIS.forEach(a => {
    html += `
      <label>
        <input type="checkbox" 
        onchange="toggleAdicional('${a.nome}', ${a.preco})">
        ${a.nome} (+R$ ${a.preco})
      </label><br/>
    `;
  });
  
  html += `<button onclick="finalizarPedido()" class="btn">Continuar</button>`;
  abrirModal(html);
}function fecharPromo() {
  document.getElementById("promo-dia").style.display = "none";
}

function aproveitarPromo() {
  const texto = `
🔥 *PROMOÇÃO DO DIA* 🔥

🍕 Pizza Grande (2 sabores)
🥤 Refrigerante 1L
💰 R$ 59,90

Quero aproveitar!
`;
  
  window.open(
    "https://wa.me/5562993343622?text=" + encodeURIComponent(texto)
  );
  
  fecharPromo();
}