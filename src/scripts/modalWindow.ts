let modal  = (document.querySelector('.header__modal')as HTMLInputElement);

addEventListener('click', function(event:any) {

    if (event.target.closest('.header__modal') || 
        event.target.className == 'cart__image fa' || 
        event.target.className == 'fa' ||
        event.target.className == 'cart__count' || 
        event.target.className == 'cart'||
        event.target.id == 'modal__open' ) 
        {
            modal.style.display = "block";
        }
    else if (modal.style.display == "block") 
    {
        modal.style.display = "none";                 
    }
    document.querySelector("#modal__open > div > span.cart__image.fa")
});