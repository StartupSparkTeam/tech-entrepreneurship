// show and hide navbar on scroll
let lastScrollTop = 0
let navbar = document.querySelector('nav')
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px'
    } else {
        navbar.style.top = '0'
    }
    lastScrollTop = scrollTop
})

// responsive navbar animation 
let hamburger = document.querySelector(".hamburger")
let sideNavBar = document.querySelector(".navLinksContainer")
let closeBtn = document.querySelector(".close p")

function showSideNav() {
    sideNavBar.classList.add('shown')
    sideNavBar.setAttribute('id', 'shown')
    console.log(sideNavBar.classList)
}
function hideSideNav() {
    sideNavBar.removeAttribute('id')
    sideNavBar.classList.remove('shown')
}

hamburger.addEventListener("click", showSideNav)
closeBtn.addEventListener("click", hideSideNav)

// style navbar links detecting corresponding section
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.navLink')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top >= offset - 10 && top < offset + height - height/2) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                try {                    
                    document.querySelector(`.${id}Nav`).classList.add('active')
                } catch (TypeError) {                    
                }
            })
        }
    })
}
navLinks.forEach(element => {
    element.addEventListener('click', () => {
        for (i = 0; i < navLinks.length; i++){
            navLinks[i].classList.remove('active')
        }
        element.classList.add('active')
    })
});