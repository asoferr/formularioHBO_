document.addEventListener('DOMContentLoaded', function() {
   
    function handleFormSubmit(event) {
        event.preventDefault();

        
        var form = event.target;

        // Cria uma string para armazenar os dados
        var formData = '';

        
        for (var i = 0; i < form.elements.length; i++) {
            var element = form.elements[i];
            if (element.name && element.value) {
                formData += element.name + ': ' + element.value + '\n';
            }
        }

        // Exibe os dados no console
        console.log('Dados do formulário:\n' + formData);

        // Limpa os campos do formulário
        form.reset();
    }

   
    var signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleFormSubmit);
    }

    
    var loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleFormSubmit);
    }
});
