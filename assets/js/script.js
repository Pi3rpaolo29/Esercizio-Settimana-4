document.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    const button = document.querySelector('.navbar ul li:nth-child(5) a')
    if(window.scrollY > 350){
        navbar.classList.add('scrolled');
        button.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
        button.classList.remove('scrolled');
    }
})

