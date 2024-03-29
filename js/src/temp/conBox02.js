(function($){
// selector
   const wrap = $('#wrap');
   const conBox = wrap.children('#conBox');
   const portBox = conBox.children('.web');
      const portCon = portBox.children('.port_category');
      const portConLi = portCon.children('li');
      const portConLink = portConLi.children('a');
      
      const portList = portBox.children('.port_list');
      const portListLi = portList.children('li');
         const portDl = portListLi.children('dl');
         const portDt = portDl.children('dt');
         const portDd = portDl.children('dd');
            const portLink = portDd.children('a');
            const portDemo = portDd.children('a').eq(0);
            const portDetail = portDd.children('a').eq(1);
      

// function

// 분류에 따라 포트폴리오 정리
portConLi.eq(0).children('a').addClass('action'); // 초기설정값

portConLink.on('click',function(e){
   e.preventDefault();
   let LinI = $(this).parent().index();
   $(this).addClass('action');
   $(this).parent().siblings().children('a').removeClass('action');
   switch (LinI){
      case 0 :
         portListLi.stop().fadeIn();
      break;
      case 1 :
         portList.children('.renewal').stop().fadeIn();
         portList.children('.clone').stop().fadeOut();
      break;
      case 2 :
         portList.children('.renewal').stop().fadeOut();
         portList.children('.clone').stop().fadeIn();
      break;
   }
})

// portLink버튼 mouseenter,focus 이벤트(클래스 추가)
portLink.on('mouseenter focus',function(){
   $(this).addClass('action');
   $(this).siblings('a').removeClass('action');
})

portLink.on('mouseleave blur',function(){
   $(this).removeClass('action');
})
})(jQuery);