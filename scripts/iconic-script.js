const btnMobile = window.document.querySelector ('#btn-mobile')

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault() 
    const nav = window.document.querySelector ('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}


const estilo1 = window.document.querySelector ('#img-estilo1')
const container1 = window.document.querySelector ('#container-pop-up1')
const popup1 = window.document.querySelector ('#pop-up-1')
const fechar = window.document.querySelector ('.btn-fechar')


estilo1.addEventListener('click', estilo1expanded)


function estilo1expanded(event) {
    estilo1.classList.toggle('active')
    container1.classList.toggle('active')
    popup1.classList.toggle('active')
    

    container1.addEventListener('click', (e)=> {
        if (e.target.id == 'container-pop-up1' || e.target.className == 'btn-fechar'){
            container1.classList.remove('active')
            popup1.classList.remove('active')
        }
    })

}



const estilo2 = window.document.querySelector ('#img-estilo2')
const container2 = window.document.querySelector ('#container-pop-up2')
const popup2 = window.document.querySelector ('#pop-up-2')
 
estilo2.addEventListener('click', estilo2expanded)

function estilo2expanded(event) {
    estilo2.classList.toggle('active')
    container2.classList.toggle('active')
    popup2.classList.toggle('active')
    
    container2.addEventListener('click', (e)=> {
        if (e.target.id == 'container-pop-up2' || e.target.className == 'btn-fechar'){
            container2.classList.remove('active')
            popup2.classList.remove('active')
        }
    })
}


/* --- scroll suave --- */

/* --- menu --- */

const menuscroll = window.document.querySelectorAll('#menu a')

menuscroll.forEach(item => {
    item.addEventListener('click', scrollmenuid)
}) 

function scrollmenuid(e){
    e.preventDefault()
    const elementmenu = e.target
    const idmenu = elementmenu.getAttribute('href')
    const gomenu = window.document.querySelector(idmenu).offsetTop

    window.scroll({
        top: gomenu - 70,
        behavior: "smooth",
    })
}

/* ---- menu --- */

/* --- quem somos --- */

const qsscroll = window.document.querySelectorAll('#button-qs a')

qsscroll.forEach(item => {
    console.log(item);
    item.addEventListener('click', scrollqs)
})

function scrollqs(e){
    e.preventDefault()
    const elementqs = e.target
    const idqs = elementqs.getAttribute('href')
    const goqs = window.document.querySelector(idqs).offsetTop

    window.scroll({
        top: goqs - 70,
        behavior: "smooth"
    })
}


/* --- quem somos --- */

/* --- scroll suave --- */