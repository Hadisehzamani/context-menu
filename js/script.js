var context_menu = document.querySelector('.context-menu')


document.body.addEventListener('contextmenu', function(event){
    event.preventDefault()
    context_menu.style.left = event.pageX
    context_menu.style.top = event.pageY
    context_menu.style.display = 'block'
    document.body.addEventListener('keydown', function(event){
        if(event.keyCode == 27){
            context_menu.style.display = 'none'
        }
    })
    document.body.addEventListener('click', function(){
        context_menu.style.display = 'none'
    })
})