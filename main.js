/* 스크롤 상태 바*/
$(window).scroll(function () {
    let currentScrollPosition = $(this).scrollTop();
    let totalContentHeight = $('.all-content').outerHeight();
    let windowHeight = $(window).outerHeight();
    let scrollableHeight = totalContentHeight - windowHeight;
    let scrollPercentage = (currentScrollPosition / scrollableHeight) * 100;

    $('#progress-bar').css('width', scrollPercentage + '%');
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
                /********추가함***** */
                $(`#profileName${j}`).css('text-decoration', 'none');
            }

            $(`#Intro${i}`).toggle();
            console.log("toggled" + i);
            $(`#profileImg${i}`).css('filter', 'grayscale(0%)');
            console.log(`#profileName${i}`);
            $(`#profileName${i}`).css('text-decoration', 'underline');
            $(`#profileName${i}`).css('text-underline-offset', '5px');
        })


        $(`#profileBox${i}`).css("transition", "transform 500ms"); // 마우스 호버링 애니메이션 추가
        /********추가함***** *///마우스 호버링 기능

        $(`#profileBox${i}`).mouseover(function () {
             $(this).css('transform', 'scale(1.2)');
            if ($(`#profileName${i}`).css('text-decoration-line') == 'none') {
                $(`#profileImg${i}`).css('filter', 'grayscale(70%)');
            } else {
                $(`#profileImg${i}`).css('filter', 'grayscale(0%)');
            }
        });
        $(`#profileBox${i}`).mouseout(function () {
            $(this).css('transform', 'scale(1.0)');
            if ($(`#profileName${i}`).css('text-decoration-line') == 'none') {
                $(`#profileImg${i}`).css('filter', 'grayscale(100%)');
            } else {
                $(`#profileImg${i}`).css('filter', 'grayscale(0%)');
            }
        });
    }

}