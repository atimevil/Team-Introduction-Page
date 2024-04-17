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
/********** 클릭시 색상추가 및 밑줄 ***************************************************/
$('#johnProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    //클릭시 색상만듬
    $('#johnProfileImg').css('filter', 'grayscale(0%)');
    $('#johnIntro').toggle();
    //나머지 밑줄 해제
    $('#davidProfileName').css('text-decoration-line', 'none');
    $('#arialProfileName').css('text-decoration-line', 'none');
    $('#kevinProfileName').css('text-decoration-line', 'none');
    //밑줄 추가
    $('#johnProfileName').css('text-decoration', 'underline');
});
$('#davidProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#davidProfileImg').css('filter', 'grayscale(0%)');
    $('#davidIntro').toggle();
    $('#johnProfileName').css('text-decoration-line', 'none');
    $('#arialProfileName').css('text-decoration-line', 'none');
    $('#kevinProfileName').css('text-decoration-line', 'none');
    $('#davidProfileName').css('text-decoration', 'underline');
});
$('#arialProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#arialProfileImg').css('filter', 'grayscale(0%)');
    $('#arialIntro').toggle();
    $('#johnProfileName').css('text-decoration-line', 'none');
    $('#davidProfileName').css('text-decoration-line', 'none');
    $('#kevinProfileName').css('text-decoration-line', 'none');
    $('#arialProfileName').css('text-decoration', 'underline');
});
$('#kevinProfileImg').click(() => {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#kevinProfileImg').css('filter', 'grayscale(0%)');
    $('#kevinIntro').toggle();
    $('#johnProfileName').css('text-decoration-line', 'none');
    $('#arialProfileName').css('text-decoration-line', 'none');
    $('#davidProfileName').css('text-decoration-line', 'none');
    $('#kevinProfileName').css('text-decoration', 'underline');
});

/********** hover시 이미지 확대 및 색상변경 ***************************************************/
$('#johnProfileBox').mouseover(function() {
    $(this).css('transform', 'scale(1.2)');
    if($('#johnProfileName').css('text-decoration-line') == 'none') {
        $('#johnProfileImg').css('filter', 'grayscale(70%)');
    } else{
        $('#johnProfileImg').css('filter', 'grayscale(0%)');
    }
});
$('#johnProfileBox').mouseout(function() {
    $(this).css('transform', 'scale(1.0)');
    if ($('#johnProfileName').css('text-decoration-line') == 'none') {
        $('#johnProfileImg').css('filter', 'grayscale(100%)');
    } else{
        $('#johnProfileImg').css('filter', 'grayscale(0%)');
    }
});
$('#davidProfileBox').mouseover(function() {
    $(this).css('transform', 'scale(1.2)');
    if($('#davidProfileName').css('text-decoration-line') == 'none') {
        $('#davidProfileImg').css('filter', 'grayscale(70%)');
    } else{
        $('#davidProfileImg').css('filter', 'grayscale(0%)');
    }
});
$('#davidProfileBox').mouseout(function() {
    $(this).css('transform', 'scale(1.0)');
    if ($('#davidProfileName').css('text-decoration-line') == 'none') {
        $('#davidProfileImg').css('filter', 'grayscale(100%)');
    } else{
        $('#davidProfileImg').css('filter', 'grayscale(0%)');
    }
});
$('#arialProfileBox').mouseover(function() {
    $(this).css('transform', 'scale(1.2)');
    if($('#arialProfileName').css('text-decoration-line') == 'none') {
        $('#arialProfileImg').css('filter', 'grayscale(70%)');
    } else{
        $('#arialProfileImg').css('filter', 'grayscale(0%)');
    }
});
$('#arialProfileBox').mouseout(function() {
    $(this).css('transform', 'scale(1.0)');
    if ($('#arialProfileName').css('text-decoration-line') == 'none') {
        $('#arialProfileImg').css('filter', 'grayscale(100%)');
    } else{
        $('#arialProfileImg').css('filter', 'grayscale(0%)');
    }
});
$('#kevinProfileBox').mouseover(function() {
    $(this).css('transform', 'scale(1.2)');
    if($('#johnProfileName').css('text-decoration-line') == 'none') {
        $('#kevinProfileImg').css('filter', 'grayscale(70%)');
    } else{
        $('#kevinProfileImg').css('filter', 'grayscale(0%)');
    }
});
$('#kevinProfileBox').mouseout(function() {
    $(this).css('transform', 'scale(1.0)');
    if ($('#kevinProfileName').css('text-decoration-line') == 'none') {
        $('#kevinProfileImg').css('filter', 'grayscale(100%)');
    } else{
        $('#kevinProfileImg').css('filter', 'grayscale(0%)');
    }
});






