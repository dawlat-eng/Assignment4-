//loading bage
$(document).ready(function(){
    $('.spinner').hide(1000 , function(){
        $('loading').slideUp(1000 , function(){
            $('body').css('overflow' , 'auto')
        });
    });
let aboutoffset=$('.about').offset().top
let navHeight=$('.navigation').outerHeight(true)
$(window).scroll(function(){
    // console.log($(window).scrollTop());
    let scrollVal=$(window).scrollTop()
    if(scrollVal> aboutoffset -navHeight){
        $('.navigation').css('background-color' , 'rgb(0,0,0,.7')
        $('#upBtn').fadeIn(1000)
    }
    else{
        $('.navigation').css('background-color' , 'transparent')
        $('#upBtn').fadeOut(1000)
    } 
});
//up btn
$('#upBtn').click(function(){
    $('body , html').animate({scrollTop:0} , 3000)
});
    //sec detect
$('a[href^="#"]').click(function(){
let currentLink=$(this).attr('href')
// console.log(currentLink);
let secOffset=$(currentLink).offset().top
$('body , html').animate({scrollTop:secOffset} , 3000)
});

});

