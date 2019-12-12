(function($){
// Selector part
const head = $('head');
const body = $('body');
const wrap = $('#wrap');
const headBox = wrap.children('#headBox');
const viewBox = wrap.children('#viewBox');
const conBox = wrap.children('#conBox');
const footBox = wrap.children('#footBox');


// headBox, footBox html,js Load part

// url 변수 선언
let htmlUrl ='./temp/';
let tempS = '<script src="../js/src/temp/';
let tempE = '.js"></script>';


// load 선언
headBox.load(htmlUrl+'headBox.html');


viewBox.load(htmlUrl+'viewBox.html',function(){
   body.append(tempS+'viewBox'+tempE);
});


footBox.load(htmlUrl+'footBox.html',function(){
   body.append(tempS+'footBox'+tempE);
   body.append(tempS+'intro_scroll'+tempE);
});

// js load Part







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


   // 스크롤 했을 때, 규칙에 따라 title 텍스트 변화.
   let rel = false;
   if(scrollTop >= 100){
      rel = true;
   }
   
   let title = 'none';
   let scr = parseInt(scrollTop / 100) % 2 == 0;
   if(scr){
      title = 1;
   }else{
      title = 0;
   }

   if(rel){
      switch (title){
         case 1:
            head.children('title').text('SCROLLING. . . .');
         break;
         case 0:
            head.children('title').text('SCROLLING . . .');
         break;
      }
   }else{
      head.children('title').text('HOME_____');
   }
});






})(jQuery);