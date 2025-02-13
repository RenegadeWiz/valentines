window.onload=function(){
    const headerContainer = document.getElementById('header');
    fetch('header.html')
    .then(response =>
        response.text()
    )
    .then(data => {
        headerContainer.innerHTML = data;
    })
    .catch(error =>
        console.log('Error loading header:', error)
    )
}