function Clicar() {
    var email = document.getElementById('iemail').value
    var senha = document.getElementById('isenha').value
    var resposta = document.getElementById('resposta').value

    alert(`Olá, ${email}, seja bem-vindo!`)
    alert(`Oi, ${senha},  shhhhhhhhi 🤫`)

    if (email.length < 10 || !email.includes('@')) {
    resposta.innerHTML = '<p style="color: red;">Email inválido</p>';
    return;
    }

    if (senha.length < 8) {
        resposta.innerHTML = '<p style="color: red;">Senha deve ter pelo menos 8 caracteres</p>';
        return;
    }

    resposta.innerHTML = `<p style="color: green;">Olá <strong>${email}</strong>, seja bem-vindo!</p>`;
}

ScrollReveal().reveal('#formulario', h1 , p, {
    delay: 375,
    duration: 500,
    reset: true
});