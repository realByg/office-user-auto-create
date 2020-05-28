var $$ = mdui.JQ;

$$(document).ready(function () {
    if ($$('#notice>.mdui-dialog-content') != '') {
        var notice = new mdui.Dialog('#notice');
        notice.open();
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
                    var usernameExists = new mdui.Dialog('#usernameExists');
                    usernameExists.open();
                    break;
                case 'wrong recaptcha':
                    $$('#accountInfo, #activation').show();
                    enroll.close();
                    var wrongRecaptcha = new mdui.Dialog('#wrongRecaptcha');
                    wrongRecaptcha.open();
                    break;
                case 'invalid code':
                    $$('#accountInfo, #activation').show();
                    enroll.close();
                    var invalidCode = new mdui.Dialog('#invalidCode');
                    invalidCode.open();
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
