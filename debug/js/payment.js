$("ul li").click(function(){
    $('.mask').show();
})

$(".mask .close").click(function(){
    $('.mask').hide();
})

$("#submit").click(function(){
    $('.mask').hide();
})

$(".typelist label").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})