
const navbar = document.querySelector('.nav');
const hiddenNavBar = document.querySelector('.hiddenNav');

window.addEventListener('scroll', function () {

    const scrollPosition = window.scrollY || this.document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight || this.document.documentElement.clientHeight;

    
    if (scrollPosition >= viewportHeight ) {
        navbar.classList.add('sticky');
        hiddenNavBar.classList.remove('hidden');
        
    } else {
        navbar.classList.remove('sticky');
        hiddenNavBar.classList.add('hidden');
    }
});