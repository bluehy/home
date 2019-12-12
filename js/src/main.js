(function($){
// Selector part
const wrap = $('#wrap');
const headBox = wrap.children('#headBox');
const viewBox = wrap.children('#viewBox');
const conBox = wrap.children('#conBox');
const footBox = wrap.children('#footBox');


// html, js load Part



// function part
// 스크롤했을 때, 메뉴버튼 드롭다운 + 최상단으로 돌아가기 버튼 활성화
$(window).on('scroll',function(){
   let scrollTop = $(window).scrollTop();
   console.log(scrollTop);
   if(scrollTop >= 10){
      headBox.find('#gnb').slideUp(500,function(){
         headBox.find('.head_menu').stop().slideDown();
      });
      footBox.find('.move_top').stop().fadeIn();
   }else{
      headBox.find('.head_menu').stop().slideUp(500,function(){
         headBox.find('#gnb').stop().slideDown();
      });
      footBox.find('.move_top').stop().fadeOut();
   }
})

// 최상단 버튼에 마우스를 올렸을 때, hover효과

footBox.find('.move_top').on('mouseenter focus',function(){
   $(this).children('button').addClass('action');
})

footBox.find('.move_top').on('mouseleave blur',function(){
   $(this).children('button').removeClass('action');
})

})(jQuery);