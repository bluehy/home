(function(){
// Selector
   const head = $('head');
   const body = $('body');
   const wrap = $('#wrap');
   const headBox = wrap.children('#headBox');
   const gnb = headBox.find('nav');
   const gnbUl = gnb.children('ul');

//function 

   headBox.find('.head_menu').on('click',function(){
      let has = $(this).hasClass('action');
      let subMenu = $(this).next('.sub_menu');
      
      if(has){
         $(this).find('i').attr({'class':'fas fa-anchor'});
         $(this).removeClass('action');
         subMenu.stop().slideUp(function(){
            $(this).remove();
         });
      }else{
         subMenu.remove();
         $(this).find('i').attr({'class':'fas fa-sort-up'});
         $(this).addClass('action');
         $(this).parent().append('<div class="sub_menu"></div>');
   
         subMenu = $(this).next('.sub_menu');
         // subMenu.append('<button type="button"><i class="fas fa-times"></i></button>');
         gnbUl.clone(true).appendTo(subMenu);
         subMenu.stop().slideDown();

         let subUl = subMenu.children('ul');
         let subLastLi = subUl.children('li').eq(-1);
         let subLastLink = subLastLi.children('a');

         subLastLink.on('blur',function(){
            headBox.find('.head_menu').removeClass('action');
            headBox.find('.head_menu').find('i').attr({'class':'fas fa-anchor'});
            subMenu.stop().slideUp(500,function(){
               $(this).remove();
            });
         })
      }
   })

})(jQuery);