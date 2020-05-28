var $$ = mdui.JQ;

var html_notice = '';
$$.ajax({
    method: 'POST',
    url: '/configs',
    success: function (responseData) {
        var response = JSON.parse(responseData);
        $$('#subscription').html('<option value="' + response.subscription + '">' + response.subscription + '</option>');
        $$('#domain').html('');
        for (domain of response.domains) {
            $$('#domain').append('<option value="' + domain + '">@ ' + domain + '</option>');
        }
        $$('#code_store_link').on('click', function (e) {
            window.open(response.code_store_link);
        });
        grecaptcha.render('g-recaptcha', {
            'sitekey': response.recaptcha_site_key
        });
        html_notice = response.notice;
    }
});

$$(document).ready(function () {
    
    mdui.mutation();

    if (html_notice != '') {
        mdui.dialog({
            title: '公告',
            content: html_notice,
            buttons: [{
                text: '我知道了'
            }]
        });
    }

});

var enroll = new mdui.Dialog('#enroll', {
    'modal': true
});

$$('#getOffice').on('click', function (e) {
    enroll.open();
});

$$('form').on('submit', function (e) {
    e.preventDefault();

    var formData = {
        subscription: $$('#subscription').val(),
        displayname: $$('#displayname').val().trim(),
        username: $$('#username').val().trim(),
        domain: $$('#domain').val(),
        code: $$('#code').val().trim(),
        grecaptcha_token: grecaptcha.getResponse()
    };

    $$('#accountInfo, #activation').hide();
    $$('.mdui-progress').show();
    $$('.enroll').height('auto');
    $$('hr').hide();
    mdui.mutation();

    $$.ajax({
        method: 'POST',
        url: '/mscreate',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function (responseData) {
            var response = JSON.parse(responseData);
            $$('.mdui-progress').hide();
            $$('hr').show();
            switch (response.stat) {
                case 'success':
                    $$('#createdAccount').show();
                    $$('#email').val(response.email);
                    $$('#password').val(response.password);
                    break;
                case 'username exists':
                    $$('#accountInfo, #activation').show();
                    enroll.close();
                    mdui.alert('用户名已存在，请重试！');
                    break;
                case 'wrong recaptcha':
                    $$('#accountInfo, #activation').show();
                    enroll.close();
                    mdui.alert('人机验证错误！');
                    break;
                case 'invalid code':
                    $$('#accountInfo, #activation').show();
                    enroll.close();
                    mdui.alert('激活码无效！');
                    break;
                default:
                    enroll.close();
                    mdui.alert(responseData);
                    break;
            }
            $$('#displayname').val('');
            $$('#username').val('');
            $$('#code').val('');
            grecaptcha.reset();
            $$('.enroll').height('auto');
        }
    });


});
