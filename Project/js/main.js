$("nav > ul > li").mouseenter(function(){
    $(this).find(".gnb_depth").stop().slideDown(400);
    });

    /*메인메뉴에서 마우스 커서가 떠나면, 서브메뉴 드롭업으로 사라짐*/
    $("nav > ul > li").mouseleave(function(){
    $(this).find(".gnb_depth").stop().slideUp(200);
});


$('.button0').on('click',function(){
    let present = $('.active')
    let prev = present.prev().css('z-index', '50');

    if(prev.length==0){
        return false;
    }

    prev.addClass('active');
    present.css('z-index', '20');
    present.removeClass('active');
})

$('.button1').on('click',function(){
    let present = $('.active')
    let next = present.next().css('z-index', '50');

    if(next.length == 0){
        return false;
    }

    next.addClass('active');
    present.css('z-index', '30');
    present.removeClass('active');
})

$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);
    if(scrollTop < 170 ){
        scrollTop = 170;
    }
    $('.quick_area').stop();
    $('.quick_area').animate({'top' : scrollTop});
});



