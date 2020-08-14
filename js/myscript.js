var openGnb = document.querySelector('.open_gnb')
var elHeader = document.querySelector('#header')

function openNav() {
    elHeader.classList.toggle('on')
}

openGnb.addEventListener('click', openNav)


function winResize() {
    var winWidth = this.innerWidth
    if ( winWidth > 800 ) {
        elHeader.classList.remove('on')
    }
}

window.addEventListener('resize', winResize)