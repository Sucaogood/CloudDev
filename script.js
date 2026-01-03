AOS.init({
    duration: 1000,
    once: true,
});

const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        });

        alert('Mensagem enviada com sucesso!');
        form.reset();
    });
}
