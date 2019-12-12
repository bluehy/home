(function($){
   // selector part
   const win = $('window');
   const wrap = $('#wrap');
   const viewBox = wrap.children('#viewBox');

   let par = [];

   
   // function part
   for(let i = 0; i < 8 ; i++){
      viewBox.append('<div class="viewImg_0'+ i +'" tabindex="-1"></div>');
      // viewBox.children('div').eq(i).css({'zIndex':i,'backgroundImage':'url("../img/viewBox/viewImg_0'+i+'.png")'});
      viewBox.children('div').eq(i).css({'zIndex':i});
      viewBox.children('div').eq(7).css({'backgroundImage':'url("../img/viewBox/viewImg_0'+7+'.png")'})
   }

   let viewLen = viewBox.children('div').length;

   for(let i = 0; i<viewLen;i++){
      let p = '.viewImg_0' + i;
      par.push(p);
   }

   let winH = win.outerHeight();
   
   win.on('scroll',function(){
      let scroll = win.scrollTop();

      for(let i = 0; i<par.length;i++){
         $(par[i]).css({top: -scroll / (par.length - i)});
      }
   });


})(jQuery);