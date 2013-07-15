$(window).load(function() {
    var cw = $('.extLink').css('height');
    $('.LeadLetter').css({'width':cw});
    if($(window).width() > 600) {
        var container = document.querySelector('.MasonryIfAvail');
        var msnry = new Masonry( container, {
            itemSelector: '.MasonryElem'
        });
    }
});
$(window).resize(function () {
    var cw = $('.extLink').css('height');
    $('.LeadLetter').css({'width':cw});
});