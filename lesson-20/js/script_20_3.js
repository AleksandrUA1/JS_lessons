window.onload = function(){
    let formWrap = document.querySelector('.formWrap')

    formWrap.addEventListener('click', function(event)  {
        if (event.target.tagName === 'INPUT') {
            event.target.value = '0'
        }
    })
}
