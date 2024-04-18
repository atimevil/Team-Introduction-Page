



/*스크롤상태바*/
$(window).scroll(function() {

    var wins = $(this).scrollTop();
    var hei = $('.all-content').outerHeight();
    var hei2 = $(window).outerHeight();
    var height = hei - hei2;
    var bar = (wins / height) * 100;
  
    $('#myBar').css('width', bar + '%');
  
  });



  //몰라서 손 안댐

    $('#carouselExampleIndicators').carousel({
        interval: 5000,
        ride: "carousel"
    });

$('.profile-img').click(function () {
    $('html, body').animate({
        scrollTop: $(this).offset().top - 100
    }, 0, 'linear');
});

  
// 함수 전체 묶어서 append 하면 호출
function calllate() {
    
    //기본적으로 설명칸 닫기,흑백 만들기
    for (let i = 1; i <= membernumbers; i++) {
        $(`#Intro${i}`).hide();
        $(`#profileImg${i}`).css('filter', 'grayscale(100%)');
    }
   

    // 팀 설명 모두 숨긴후 ,선택한 팀원 설명만 토글하기
    for (let i = 1; i <= membernumbers; i++) {
       
        $(`#profileImg${i}`).click(function () {
            for (let j = 1; j <= membernumbers; j++) {
                $(`#Intro${j}`).hide();
                $(`#profileImg${j}`).css('filter', 'grayscale(100%)');
            }

            $(`#Intro${i}`).toggle();
            $(`#profileImg${i}`).css('filter', 'grayscale(0%)');

            // 동적 변수가 생겨서  for 문으로 반복문 만듦
            // $('#kevinProfileImg').click(() => {
            //     $('.intro').hide();
            //     $('.profile-img').css('filter', 'grayscale(100%)');
            //     $('#kevinProfileImg').css('filter', 'grayscale(0%)');
            //     $('.profile-name').css('text-decoration', 'none');
            //     $('#kevin').css('text-decoration', 'underline');
            //     $('#kevinIntro').toggle();
            // });
            
        })
    }
    
}

$('.wip').click(() => {
    alert('죄송합니다. 아직 준비 중인 페이지입니다.');
})

/*화면상단이동버튼*/
const $Top_btn = document.querySelector(".MoveTop-btn");

//버튼 클릭시 페이지 상단으로 이동
$Top_btn.onclick = () => {
    window.scrollTo({
        top: 0,    //페이지 총 Height
        behavior: "smooth"
    });
};

