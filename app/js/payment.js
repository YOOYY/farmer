$("ul li").click(function(){
    $('.mask .content .money em').text($(this).data('money'));
    $('.mask .content .msg').text($(this).data('text')+' '+$(this).data('money')+'元');
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