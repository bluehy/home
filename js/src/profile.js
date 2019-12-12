(function($){
// Selector part
const head = $('head');
const body = $('body');
const wrap = $('#wrap');
const headBox = wrap.children('#headBox');


const footBox = wrap.children('#footBox');


// html, js load part

// url 변수 선언
let htmlUrl ='./temp/';
let tempS = '<script src="../js/src/temp/';
let tempE = '.js"></script>';

// load 선언
headBox.load(htmlUrl+'headBox.html',function(){
   body.append(tempS+'headBox'+tempE);
});

footBox.load(htmlUrl+'footBox.html',function(){
   body.append(tempS+'footBox'+tempE);
   body.append(tempS+'basic_scroll_event'+tempE);
});


// function part

})(jQuery);