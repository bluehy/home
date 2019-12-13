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
   headBox.load(htmlUrl+'headBox.html',function(){
      body.append(tempS+'headBox'+tempE);
   });


   viewBox.load(htmlUrl+'viewBox.html',function(){
      body.append(tempS+'viewBox'+tempE);
   });



   footBox.load(htmlUrl+'footBox.html',function(){
      body.append(tempS+'footBox'+tempE);
      body.append(tempS+'basic_scroll_event'+tempE);
   });


// function part
// conBox
const webArea = conBox.children('.web');
const webUl = webArea.children('ul');
const webLi = webUl.children('li');
const webDl = webLi.children('dl');
const webDt = webDl.children('dt');
const webDd = webDl.children('dd');
   const webImg = webDd.children('img');
   const webA = webDd.children('a');

   webDd.on('mouseenter focus',function(){
      $(this).addClass('action');
   })

})(jQuery);