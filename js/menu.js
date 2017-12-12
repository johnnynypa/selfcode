var menu = document.getElementById('menu');
window.addEventListener('scroll', function() {
    if ( window.pageYOffset > menu.offsetTop ){
        menu.classList.add('fixed');
    }else{
        menu.classList.remove('fixed');
    }
});

switch(window.location.pathname){
    case '/':
        document.getElementById('link-home').classList.add('link-nav-active');
        break;
    case '/index.html':
        document.getElementById('link-home').classList.add('link-nav-active');
        break;
    case '/mision.html':
        document.getElementById('link-mision').classList.add('link-nav-active');
        break;
    case '/programas.html':
        document.getElementById('link-programas').classList.add('link-nav-active');
        break;
    case '/servicios.html':
        document.getElementById('link-servicios').classList.add('link-nav-active');
        break;
    case '/workshops.html':
        document.getElementById('link-workshops').classList.add('link-nav-active');
        break;
    case '/contacto.html':
        document.getElementById('link-contacto').classList.add('link-nav-active');
        break;
}

// document.getElementById('tres1')
// .addEventListener('click', function (event) {
//     alert("Hola");
// });