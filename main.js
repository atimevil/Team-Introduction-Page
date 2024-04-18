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

$(window).scroll(function () {
    var wins = $(this).scrollTop();
    var hei = $('.all-content').outerHeight();
    var hei2 = $(window).outerHeight();
    var height = hei - hei2;
    var bar = (wins / height) * 100;

    $('#myBar').css('width', bar + '%');
});
function calllate() {

    for (let i = 1; i <= membernumbers; i++) {
        $(`#Intro${i}`).hide();
        $(`#profileImg${i}`).css('filter', 'grayscale(100%)');
        $(`.profile-info${i}`).css('text-decoration', 'none');
    }


    for (let i = 1; i <= membernumbers; i++) {

        $(`#profileImg${i}`).mouseover(function() {
            for (let j = 1; j <= membernumbers; j++) {
                if($(`#profile-info${j}`).css('text-decoration-line') == 'none') {
                    $(`#profileImg${j}`).css('filter', 'grayscale(70%)');
                }
            }
            $(`#profileImg${i}`).css('transform', 'scale(1.2)');
        });
        $(`#profileImg${i}`).mouseout(function() {
            for (let j = 1; j <= membernumbers; j++) {
                if($(`#profile-info${j}`).css('text-decoration-line') == 'none') {
                    $(`#profileImg${j}`).css('filter', 'grayscale(70%)');
                } else{
                    $(`#profileImg${j}`).css('filter', 'grayscale(0%)');
                }
            }
            $(`#profileImg${i}`).css('transform', 'scale(1.0)');
        });

        $(`#profileImg${i}`).click(function () {
            for (let j = 1; j <= membernumbers; j++) {
                $(`#Intro${j}`).hide();
                $(`#profileImg${j}`).css('filter', 'grayscale(100%)');
                $(`.profile-info${j}`).css('text-decoration', 'none');
            }

            $(`#Intro${i}`).toggle();
            $(`#profileImg${i}`).css('filter', 'grayscale(0%)');
            $(`.profile-info${i}`).css('text-decoration', 'underline');
        })
    }

}

const $Top_btn = document.querySelector(".MoveTop-btn");

//버튼 클릭시 페이지 상단으로 이동
$Top_btn.onclick = () => {
    window.scrollTo({
        top: 0,    //페이지 총 Height
        behavior: "smooth"
    });
};
