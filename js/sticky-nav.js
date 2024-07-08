
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav');
    const scrollPosition = window.scrollY || this.document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight || this.document.documentElement.clientHeight;

    if (scrollPosition >= viewportHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});