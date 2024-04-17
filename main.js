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


  // 팀 설명 모두 숨긴후 ,선택한 팀원 설명만 토글하기
  for (let i = 1; i <= 4; i++) {
    $(`#profileImg${i}`).click(function () {
      for (let j = 1; j <= 4; j++) {
        $(`#Intro${j}`).hide();
         $(`#Intro${i}`).toggle();
      $('.profile-img').css('filter', 'grayscale(100%)');
      $('#prfileImg${i}').css('filter', 'grayscale(0%)');
      }
    })
  }


