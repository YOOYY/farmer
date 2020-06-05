var pReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
var pEl = $('#phone');
pEl.blur(function () {
    inputVerify(pReg, pEl);
})

var cReg = /^\d{4}$/;
var cEl = $('#code');
cEl.blur(function () {
    inputVerify(cReg, cEl);
})

$("form").submit(function () {
    var phone = inputVerify(pReg, pEl),
        code = inputVerify(cReg, cEl);
    if (phone && code) {
        return true;
    } else {
        return false;
    }
})

$('.mask .close').click(function () {
    $('.mask').hide();
    return false;
})

var time = 60;
$('#verify').click(function () {
    if(!inputVerify(pReg, pEl)){
        alert('手机号不能为空！');
        return false;
    }
    if (time != 60) {
        return false;
    }
    var timer = setInterval(function () {
        $('#verify').text('重新获取(' + time + 's)')
        time--;
        if (time < 0) {
            $(this).text('获取验证码');
            clearInterval(timer);
            time = 60;
        }
    }, 1000);
})

function inputVerify(reg, el) {
    var value = $.trim(el.val());
    if (value == '') {
        el.removeClass('success').addClass('fail');
        el.attr('placeholder', '输入不能为空！');
        return false;
    }

    if (!reg.test(value)) {
        el.removeClass('success').addClass('fail');
        el.attr('placeholder', '输入格式错误！');
        return false;
    }

    el.addClass('success').removeClass('fail');
    return value;
}