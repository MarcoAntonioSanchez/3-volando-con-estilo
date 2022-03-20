// Navbar scroll effect

const navbar = document.getElementById('mainNavbar');
document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > navbar.clientHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Input date type to text type

window.addEventListener('load', function () {
    document.getElementById('fecha').type = 'text';
    document.getElementById('fecha').addEventListener('blur', function () {
        document.getElementById('fecha').type = 'text';
    });
    document.getElementById('fecha').addEventListener('focus', function () {
        document.getElementById('fecha').type = 'date';
    });
});