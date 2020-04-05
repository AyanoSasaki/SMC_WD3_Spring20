$(document).ready(function(){
    $('#myCarousel').carousel({
        interval: 330
    });

    $('#carouselControl').click(function(){

        if( $('#carouselControl').hasClass('paused')){
            $('#myCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        }
        eles {
            $('#myCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

    $('#modelLauncher').click(function(){
        $('#exampleModal').modal({
            backdrop: false
        });
    });
});