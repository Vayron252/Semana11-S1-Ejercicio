// function QuitarClaseActivo() {
//     const linkes = document.querySelectorAll('.navbar-nav a');
//     linkes.forEach(link => {
//         console.log('Hola');
//         link.classList.remove('active');
//     });
// }

document.addEventListener("DOMContentLoaded", function(event) {
    //QuitarClaseActivo();
    let nombrePage = document.getElementById('txtTitulo');
    const links = document.querySelectorAll('.navbar-nav a');
    const linkxactivar = Array.from(links).find((link) => {
        return link.textContent.toLowerCase() == nombrePage.textContent.toLowerCase();
    });
    linkxactivar.classList.add('active');
});