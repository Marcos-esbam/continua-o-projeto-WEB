
function togglePass() {
    const senha1 = document.getElementById('inputSenha1');
    const senha2 = document.getElementById('inputSenha2');
    const botao = document.getElementById('botaoVer');

    if (senha1.type === 'password') {
        senha1.type = 'text';
        senha2.type = 'text';
        botao.textContent = 'Ocultar Senha';
    } else {
        senha1.type = 'password';
        senha2.type = 'password';
        botao.textContent = 'Ver Senha';
    }
}
document.getElementById('inputSenha2').addEventListener('input', () => {
    const senha1 = document.getElementById('inputSenha1').value;
    const senha2 = document.getElementById('inputSenha2').value;
    const erroSenha = document.getElementById('erroSenha');

    if (senha1 !== senha2) {
        erroSenha.textContent = 'As senhas não coincidem.';
        erroSenha.style.color = 'red';
    } else {
        erroSenha.textContent = '';
    }
});
function validarFormulario() {
    const mensagem = document.getElementById('mensagem').value.trim();
    const erroMensagem = document.getElementById('erroMensagem');

    if (mensagem === "") {
        erroMensagem.textContent = "A mensagem não pode estar vazia.";
        return false;
    } else if (mensagem.length < 10) {
        erroMensagem.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
        return false;
    } else {
        erroMensagem.textContent = "";
        alert("Mensagem enviada com sucesso!");
       
        return true;
    }
}
