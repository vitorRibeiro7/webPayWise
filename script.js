const cabecalho = document.getElementById('cabec');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    cabecalho.style.background = `linear-gradient(120deg, rgb(48, 151, 115, ${value / 300}), rgb(89, 179, 106, ${value / 300}))`;
})