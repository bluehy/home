(function($){
   // selector part
   const win = $(window);
   const wrap = $('#wrap');
   const viewBox = wrap.children('#viewBox');
      const introT = viewBox.children('.intro_title');
      const introDt = introT.children('dt');
      const introDd = introT.children('dd');
      const introBtn = introDd.children('button');

   let par = [];

   
// function part
// viewBox parallax 기능 적용하기
   for(let i = 0; i < 9 ; i++){
      viewBox.append('<div class="viewImg_0'+ i +'" tabindex="-1"></div>');
      // viewBox.children('div').eq(i).css({'zIndex':i,'backgroundImage':'url("../img/viewBox/viewImg_0'+i+'.png")'});
      viewBox.children('div').eq(i).css({'zIndex': i });
      viewBox.children('div').eq(i).css({'backgroundImage':'url("../img/viewBox/viewImg_0'+i+'.png")'})
   }

   let viewLen = viewBox.children('div').length;

   for(let i = 0; i<viewLen;i++){
      let p = '.viewImg_0' + i;
      par.push(p);
   }

   let winH = win.outerHeight();
   
   win.on('scroll',function(){
      let scroll = win.scrollTop();

      for(let i = 0; i < par.length; i++){
         $(par[i]).css({top: -scroll / (i + 1)});
         if(scroll <= 50){
            viewBox.children('.intro_title').stop().animate({opacity: 1});
         }else{
            viewBox.children('.intro_title').stop().animate({opacity: parseInt(scroll / 1000) });
         }
      }
   });


// .intro_title 등장
window.setTimeout(function(){
   viewBox.children('.intro_title').stop().fadeIn(1000);
},2000);


// viewBox img load
for(let i = 0; i < par.length; i++){
   $(par[i]).stop().slideDown(600 * (i+1));
}



// 버튼 클릭시 파일 다운로드
let pdfRel = false;
introBtn.on('click',function(){
   if(pdfRel){
      let download = function(){
         let url = "../img/logo.png";
         location.href = url;
      };
      download();
   }else{
      alert('준비중입니다.');
   }
});



})(jQuery);