new WOW().init();
$('#carousel-example-1').carousel({ interval: 10000, pause:'false' });
$(document).ready(function() {
    // hide the forms when page is ready
    $('#reg').hide();
    // $('#b').hide();

    $('#button1').click(function(){ 
        $('#reg').show(); 
        $('#sign').hide();
    });
    $('#button2').click(function(){ 
        $('#sign').show(); 
        $('#reg').hide();
    });
});

$(document).ready(function() {
    // hide the forms when page is ready
    $('#regF').hide();
    // $('#b').hide();

    $('#button1').click(function(){ 
        $('#regF').show(); 
        $('#signF').hide();
    });
    $('#button2').click(function(){ 
        $('#signF').show(); 
        $('#regF').hide();
    });
});
