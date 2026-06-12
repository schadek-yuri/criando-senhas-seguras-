const gerarBtn = document.getElementById("gerarSenha");
const senhaOutput = document.getElementById("senhaGerada");
const copiarBtn = document.getElementById("copiarSenha");
const tamanhoSenha = document.getElementById("tamanhoSenha");
const avaliacao = document.getElementById("avaliacaoSenha");

function gerarSenha(tamanho) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}

function avaliarSenha(senha) {
    let score = 0;

    if (senha.length >= 8) score++;
    if (/[A-Z]/.test(senha)) score++;
    if (/[a-z]/.test(senha)) score++;
    if (/[0-9]/.test(senha)) score++;
    if (/[\!\@\#\$\%\^\&\*\(\)\_\+\[\]\{\}\|\;\:\,\.<>?]/.test(senha)) score++;

    switch(score) {
        case 5: return "Muito Forte 💪";
        case 4: return "Forte 👍";
        case 3: return "Média ⚖️";
        case 2: return "Fraca 😬";
        default: return "Muito Fraca 🚨";
    }
}

gerarBtn.addEventListener("click", () => {
    const senha = gerarSenha(parseInt(tamanhoSenha.value));
    senhaOutput.value = senha;
    avaliacao.textContent = avaliarSenha(senha);
});

copiarBtn.addEventListener("click", () => {
    senhaOutput.select();
    senhaOutput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Senha copiada para a área de transferência!");
});
