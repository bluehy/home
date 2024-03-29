(function($){
// Selector part
const head = $('head');
const body = $('body');
const wrap = $('#wrap');
const headBox = wrap.children('#headBox');
   
         


const viewBox = wrap.children('#viewBox');
   const introT = viewBox.children('.intro_title');
   const introDt = introT.children('dt');
   const introDd = introT.children('dd');
   const introBtn = introDd.children('button');


const conBox = wrap.children('#conBox');
const footBox = wrap.children('#footBox');




// function part
// 스크롤했을 때, 메뉴버튼 드롭다운 + 최상단으로 돌아가기 버튼 활성화
$(window).on('scroll',function(){
   let scrollTop = $(window).scrollTop();
   console.log(scrollTop);
   if(scrollTop >= 10){
      headBox.find('#gnb').slideUp(500,function(){
         headBox.find('.head_menu').stop().slideDown();
      });
      headBox.stop().animate({backgroundColor:'transparent'});
      footBox.find('.move_top').stop().fadeIn();
   }else{
      headBox.find('.head_menu').stop().slideUp(500,function(){
         headBox.find('#gnb').stop().slideDown();
      });
      headBox.stop().animate({backgroundColor:'#fff'});
      footBox.find('.move_top').stop().fadeOut();
      // subMenu가 열려있을 경우에, 함께 사라지게끔(초기화)
      let subMenu = headBox.find('.sub_menu');
      headBox.find('.head_menu').removeClass('action');
      headBox.find('.head_menu').find('i').attr({'class':'fas fa-anchor'});
      subMenu.stop().fadeOut(500,function(){
         $(this).remove();
      })
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


// headBox 
   // headBox 버튼 클릭 이벤트
   let gnbLi = headBox.find('#gnb').find('li');
   let conBoxOf = conBox.offset().top;
   let proOf = conBox.children('.profile').offset().top;
   let portOf = conBox.children('.web').offset().top;
   let galOf = conBox.children('.others').offset().top;
   // console.log(conBoxOf);

   gnbLi.children('a').on('click',function(e){
      e.preventDefault();
      let myI = $(this).parent().index();
      console.log(myI);
      switch (myI){
         case 0 : 
            $('html, body').stop().animate({scrollTop : proOf + 'px'},500);
            break;
         case 1 :
            $('html, body').stop().animate({scrollTop : portOf + 'px'},500);
         break;
         case 2 :
            $('html, body').stop().animate({scrollTop : galOf + 'px'},500);
         break;
      }
   });

// introDd(스크롤버튼)클릭시 conBox챕으로 이동
introDd.eq(-1).children('a').on('click',function(e){
   e.preventDefault();
   $('html,body').stop().animate({scrollTop:conBoxOf + 'px'},500);
});


})(jQuery);