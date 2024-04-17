$(document).ready(function () {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#johnProfileImg').css('filter', 'grayscale(0%)');
    $('#johnIntro').show();
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
$('#johnProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#johnProfileImg').css('filter', 'grayscale(0%)');
    $('#johnIntro').toggle();
});
$('#davidProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#davidProfileImg').css('filter', 'grayscale(0%)');
    $('#davidIntro').toggle();
});
$('#arialProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#arialProfileImg').css('filter', 'grayscale(0%)');
    $('#arialIntro').toggle();
});
$('#kevinProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#kevinProfileImg').css('filter', 'grayscale(0%)');
    $('#kevinIntro').toggle();
});


/*화면상단이동버튼 시작*/


const $Top_btn = document.querySelector(".MoveTop_btn");

//버튼 클릭시 페이지 상단으로 이동
$Top_btn.onclick=()=>{
    window.scrollTo({
        top: 0,    //페이지 총 Height
        behavior: "smooth"
    });
};
/*화면상단이동버튼 끝*/
