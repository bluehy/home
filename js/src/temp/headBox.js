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
      
      if(has){
         $(this).find('i').attr({'class':'fas fa-plus'});
         $(this).removeClass('action');
         $(this).next().stop().fadeOut(500,function(){
            $(this).remove();
         })
      }else{
         $(this).find('i').attr({'class':'fas fa-sort-up'});
         $(this).addClass('action');
         $(this).parent().append('<div class="sub_menu"></div>');
   
         let subMenu = $(this).next('.sub_menu');
         subMenu.append('<button type="button"><i class="fas fa-times"></i></button>')
         gnbUl.clone(true).appendTo(subMenu);
         subMenu.stop().fadeIn();

         subMenu.children('button').on('click',function(){
            headBox.find('.head_menu').removeClass('action');
            headBox.find('.head_menu').find('i').attr({'class':'fas fa-plus'});
            $(this).parent().stop().fadeOut(500,function(){
               $(this).remove();
            });
         })

      }
   })

   

})(jQuery);