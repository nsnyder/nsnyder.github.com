$(window).load(function() {
    var cw = $('.extLink').css('height');
    $('.LeadLetter').css({'width':cw});
});
$(window).resize(function () {
    var cw = $('.extLink').css('height');
    $('.LeadLetter').css({'width':cw});
});