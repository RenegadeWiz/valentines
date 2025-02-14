window.onload = function(){
    const headerContainer = document.querySelector('#header');

    fetch('header.html')
    .then(response =>response.text())
    .then(data => {
        headerContainer.innerHTML = data;
        interactive()
    })
    .catch(error =>
        console.log('Error loading header:', error)
    )
}

function interactive(){
    const hamburger = document.querySelector('.hamburger')
    const navBar = document.querySelector('.nav-bar')
    const ulEl = document.querySelector('.ul-el')
    const header = document.querySelector('header')
    let isActive = false

    hamburger.addEventListener('click', hamburgerActive)

    function hamburgerActive(){
        isActive = !isActive
        if(isActive){
            hamburger.classList.add('active')
            navBar.classList.add('active')
            ulEl.classList.add('active')
            header.classList.add('active')
        }
        else{
            hamburger.classList.remove('active')
            navBar.classList.remove('active')
            ulEl.classList.remove('active')
            header.classList.remove('active')
        }
    }

}

