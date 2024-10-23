// Função para carregar os usuários salvos no LocalStorage
function carregarUsuarios() {
    const listaUsuarios = document.getElementById('lista-usuarios');
    listaUsuarios.innerHTML = ''; // Limpa a lista antes de adicionar os usuários

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');
        li.textContent = `${usuario.nome} - ${usuario.email}`;
        listaUsuarios.appendChild(li);
    });
}

// Função para salvar novo usuário
function salvarUsuario(event) {
    event.preventDefault(); // Evita recarregar a página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const novoUsuario = { nome, email };

    // Recupera os usuários salvos e adiciona o novo
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    carregarUsuarios(); // Atualiza a lista na tela

    // Limpa o formulário
    document.getElementById('form-cadastro').reset();
}

// Adiciona o evento de submissão ao formulário
document.getElementById('form-cadastro').addEventListener('submit', salvarUsuario);

// Carrega a lista ao iniciar
carregarUsuarios();
