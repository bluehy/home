(function($){

// Selector part
const wrap = $('#wrap');
const footBox = wrap.children('#footBox');

const footBtn = footBox.find('.move_top');
const moveBtn = footBtn.children('button');

//function part
// 최상단으로 가기 버튼에 마우스를 올렸을 때, hover효과

footBox.find('.move_top').on('mouseenter focus',function(){
   $(this).children('button').addClass('action');
});

footBox.find('.move_top').on('mouseleave blur',function(){
   $(this).children('button').removeClass('action');
});


// 최상단으로 가기 버튼을 클릭했을 때, 이동효과
footBox.find('.move_top').on('click',function(){
   $('html, body').stop().animate({ scrollTop: 0 + 'px' },700);
});


})(jQuery);