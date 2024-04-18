$(document).ready(function () {
    $('#carouselExampleIndicators').carousel({
        interval: 5000,
        ride: "carousel"
    });
});
$('.profile-img').click(function () {
    $('html, body').animate({
        scrollTop: $(this).offset().top - 100
    }, 0, 'linear');
});
function calllate() {

    for (let i = 1; i <= membernumbers; i++) {
        $(`#Intro${i}`).hide();
        $(`#profileImg${i}`).css('filter', 'grayscale(100%)');
    }


    for (let i = 1; i <= membernumbers; i++) {

        $(`#profileImg${i}`).click(function () {
            for (let j = 1; j <= membernumbers; j++) {
                $(`#Intro${j}`).hide();
                $(`#profileImg${j}`).css('filter', 'grayscale(100%)');
            }

            $(`#Intro${i}`).toggle();
            $(`#profileImg${i}`).css('filter', 'grayscale(0%)');
        })
    }

}