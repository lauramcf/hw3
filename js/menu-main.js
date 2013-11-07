$(function(){
    render(Menu.pizzas);
    render(Menu.drinks);
    render(Menu.desserts);
});

function render(entries) {
    var instance;
    var menu = $('.content');
    menu.empty();
    $.each(entries, function(index, value){
        instance = menu.clone();
        instance.find('.name').html(this.name);
        instance.find('.description').html(this.description);
        instance.find('.prices').html(this.prices);
        instance.find('.price').html(this.price);


        instance.removeClass('menu');
        menu.append(instance);
    });
}
