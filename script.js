$(document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
        // Agregar el texto a la carta cuando se abre
        $('.words.line1').text(cardText);
    });
    btn_reset.click(function() {
        close();
    });



    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});
