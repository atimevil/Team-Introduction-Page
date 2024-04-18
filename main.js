$(document).ready(function () {
    $('.intro').hide();
    $('.profile-img').css('filter', 'grayscale(100%)');
    $('#johnProfileImg').css('filter', 'grayscale(0%)');
    $('#johnProfileName').css('text-decoration', 'underline');
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
    $('.intro').hide();
    $('.profile-name').css('text-decoration', 'none');
    $('.profile-img').css('filter', 'grayscale(100%)');
});

/********** 클릭시 색상추가 및 밑줄 ***************************************************/
$('#johnProfileImg').click(() => {
    $('#johnProfileImg').css('filter', 'grayscale(0%)');
    $('#johnIntro').toggle();
    $('#johnProfileName').css('text-decoration', 'underline');
});
$('#davidProfileImg').click(() => {
    $('#davidProfileImg').css('filter', 'grayscale(0%)');
    $('#davidIntro').toggle();
    $('#davidProfileName').css('text-decoration', 'underline');
});
$('#arialProfileImg').click(() => {
    $('#arialProfileImg').css('filter', 'grayscale(0%)');
    $('#arialIntro').toggle();
    $('#arialProfileName').css('text-decoration', 'underline');
});
$('#kevinProfileImg').click(() => {
    $('#kevinProfileImg').css('filter', 'grayscale(0%)');
    $('#kevinIntro').toggle();
    $('#kevinProfileName').css('text-decoration', 'underline');
});

/********** 마우스 호버링 기능 ***************************************************/
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
    if($('#kevinProfileName').css('text-decoration-line') == 'none') {
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






