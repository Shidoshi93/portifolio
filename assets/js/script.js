const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', function (event) {

    event.preventDefault();

    const campoNome = document.querySelector('#nome');
    const errNome = document.querySelector('#errNome');

    if (campoNome.value.length < 3) {
        errNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        errNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const errEmail = document.querySelector('#errEmail');

    if (!campoEmail.value.match(emailRegex)) {
        errEmail.innerHTML = 'Digite um E-mail válido.';
        campoEmail.focus();
        return;
    } else {
        errEmail.innerHTML = '';
    }

    const campoAssunto = document.querySelector('#assunto');
    const errAssunto = document.querySelector('#errAssunto');

    if (campoAssunto.value.length < 5) {
        errAssunto.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
        campoAssunto.focus();
        return;
    } else {
        errAssunto.innerHTML = '';
    }

    const campoMensagem = document.querySelector('#mensagem');
    const errMensagem = document.querySelector('#errMensagem');

    if (campoMensagem.value.length < 10) {
        errMensagem.innerHTML = 'A mensagem deve ter no minimo 10 caracteres.';
        campoMensagem.focus();
        return;
    } else {
        errMensagem.innerHTML = '';
    }

    window.alert("Formulário Enviado com Sucesso!");

    campoNome.value = ''
    campoEmail.value = ''
    campoAssunto.value = ''
    campoMensagem.value = ''

});
