const tenant_id = '';
const client_id = '';
const client_secret = '';
const skuId = '';
const domain = '@example.com';

var html = `
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>微软全局子号自助开通</title>
    <link rel="stylesheet" href="https://cdnjs.loli.net/ajax/libs/mdui/0.4.3/css/mdui.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.8/fullpage.min.css">
    <link href="https://i.loli.net/2020/01/25/mHyKw936UxpEM1Y.png" rel="icon" type="image/png">
    <style>
        .intro {
            background: url('https://i.loli.net/2020/01/25/KEScJXCBfAzaIjW.png') no-repeat;
            background-size: cover
        }

    </style>
    <style>
        .create-wait {
            display: none;
            position: absolute;
            z-index: 999;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            top: 0
        }

        .create-wait .mdui-valign {
            width: 100%;
            height: 100vh;
        }

    </style>
</head>

<body>

    <a href="https://github.com/you"><img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" style="position: absolute; top: 0;z-index: 999999;right: 0"></a>

    <div id="fullpage">

        <div class="section intro">

            <div class="mdui-appbar mdui-appbar-fixed mdui-color-white">
                <div class="mdui-toolbar">
                    <a href="javascript:;" class="mdui-typo-headline">微软全局子号自助开通</a>
                    <div class="mdui-toolbar-spacer"></div>
                </div>
            </div>

            <div class="mdui-text-color-white-text" align="center" style="width: 70%;margin: auto">
                <img src="https://i.loli.net/2020/01/25/LF2q4bBN3rCMcDt.png" style="width: 250px">
                <h1 style="font-size: 40px;font-weight: 500">微软全局子号自助开通</h1>
                <h1 style="font-size: 30px;font-weight: 500">此全局订阅为A1</h1>
                <h1 style="font-size: 30px;font-weight: 500">(5TB Onedrive + 在线版Office)</h1>
                <br><br><br><br>
                <a href="#form"><button class="mdui-btn mdui-ripple mdui-color-red mdui-m-a-2" style="width: 140px;height: 50px">立即获取</button></a>
                <a href="https://www.office.com/login"><button class="mdui-m-a-2 mdui-btn mdui-ripple mdui-color-white" style="width: 140px;height: 50px">登录</button></a>
            </div>

        </div>

        <div class="section form">
            <div class="create-wait">
                <div class="mdui-valign">
                    <div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>
                </div>
            </div>
            <div class="mdui-container">
                <div class="mdui-row">
                    <h2 style="font-size: 40px;font-weight: 500" id="aform">微软全局子号自助开通</h2>

                    <form id="aform">
                        <div class="mdui-textfield mdui-textfield-floating-label">
                            <label class="mdui-textfield-label">姓/Lastname *</label>
                            <input class="mdui-textfield-input" type="text" name="lastname" pattern="[A-z0-9]{1,10}" required>
                            <div class="mdui-textfield-error">英文/拼音</div>
                        </div>
                        <div class="mdui-textfield mdui-textfield-floating-label">
                            <label class="mdui-textfield-label">名/Firstname *</label>
                            <input class="mdui-textfield-input" type="text" name="firstname" pattern="[A-z0-9]{1,10}" required>
                            <div class="mdui-textfield-error">英文/拼音</div>
                        </div>
                        <div class="mdui-textfield mdui-textfield-floating-label">
                            <label class="mdui-textfield-label">邮箱前缀 *</label>
                            <input class="mdui-textfield-input" type="text" name="username" pattern="[A-z0-9]{1,50}" required>
                            <div class="mdui-textfield-error">@ 前面的字符，允许字母/数字</div>
                        </div>
                        <input type="submit" class="mdui-btn mdui-ripple mdui-color-yellow" value="提交">
                        <div style="margin-top: 20px; color: gray">* 提交后账户信息将显示在网页上，请勿刷新</div>
                    </form>

                    <div class="ainfo" style="display: none">
                        <h2 style="font-size: 30px;font-weight: 500">微软全局子号创建成功！</h2>
                        <label class="mdui-textfield-label">邮箱</label>
                        <input class="mdui-textfield-input cremail" type="text" value="">
                        <label class="mdui-textfield-label">初始密码</label>
                        <input class="mdui-textfield-input crpass" type="text" value="">
                        <a href="https://www.office.com/login" target="_blank"><button class="mdui-m-t-4 mdui-btn mdui-ripple mdui-color-red" style="width: 140px;height: 50px">前往登录</button></a>
                    </div>

                </div>
            </div>
        </div>

    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.loli.net/ajax/libs/mdui/0.4.3/js/mdui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.8/vendors/scrolloverflow.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.8/fullpage.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#fullpage').fullpage({
                anchors: ['intro', 'form'],
                scrollOverflow: true,
                verticalCentered: true
            });
        });

    </script>
    <script>
        $('form').submit(function(e) {
            e.preventDefault();
            mdui.dialog({
                title: '创建账号',
                content: '点击确认后开始创建账号，请耐心等待，勿刷新网页',
                buttons: [{
                    text: '取消'
                }, {
                    text: '确认',
                    onClick: function(inst) {
                        $('.create-wait').show();
                        $.ajax({
                            type: "POST",
                            url: "/mscript",
                            data: JSON.stringify({
                                lastname: e.target['lastname'].value.trim(),
                                firstname: e.target['firstname'].value.trim(),
                                username: e.target['username'].value.trim()
                            }),
                            success: function(res) {
                                $('.create-wait').hide();
                                var response = JSON.parse(res);
                                if (response.stat == 'success') {
                                    $('.cremail').val(response.email);
                                    $('.crpass').val(response.password);
                                    $('form').hide();
                                    $('.mdui-row>h2').hide();
                                    $('.ainfo').show();
                                } else if (response.stat == 'username exists') {
                                    mdui.alert('创建失败，前缀已被占用');
                                } else {
                                    JSON.stringify(response);
                                }
                            },
                            contentType: "application/json"
                        });
                    }
                }]
            });
        });

    </script>
</body>

</html>

`;

function enQuery(data) {
    const ret = [];
    for (let d in data) {
        ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    }
    return ret.join("&");
}

function password_gen() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = '';
    var charCount = 0;
    var numCount = 0;

    for (var i = 0; i < string_length; i++) {
        // If random bit is 0, there are less than 3 digits already saved, and there are not already 5 characters saved, generate a numeric value. 
        if ((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
            var rnum = Math.floor(Math.random() * 10);
            randomstring += rnum;
            numCount += 1;
        } else {
            // If any of the above criteria fail, go ahead and generate an alpha character from the chars string
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
            charCount += 1;
        }
    }
    return randomstring;
}

async function get_ms_token() {
    const url = 'https://login.microsoftonline.com/' + tenant_id + '/oauth2/v2.0/token';
    const scope = 'https://graph.microsoft.com/.default';

    const post_data = {
        'grant_type': 'client_credentials',
        'client_id': client_id,
        'client_secret': client_secret,
        'scope': scope
    };
    const reqOpt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: enQuery(post_data)
    };
    const response = await fetch(url, reqOpt);
    const results = await response.json();
    console.log(results);
    return results.access_token;
}

async function assignLicense(email, token) {
    const url = 'https://graph.microsoft.com/v1.0/users/' + email + '/assignLicense';
    const post_data = {
        "addLicenses": [{
            "disabledPlans": [],
            "skuId": skuId
        }],
        "removeLicenses": []
    };
    const reqOpt = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post_data)
    };
    const response = await fetch(url, reqOpt);
    const results = await response.json();
    console.log('assignLicense ' + results);

    if (results.error == undefined) {
        return true;
    } else {
        return false;
    }
}

async function createUser(requestBody, access_token) {
    const url = 'https://graph.microsoft.com/v1.0/users';
    const password = password_gen();
    const post_data = {
        "accountEnabled": true,
        "displayName": requestBody.firstname + ' ' + requestBody.lastname,
        "mailNickname": requestBody.username,
        "passwordPolicies": "DisablePasswordExpiration, DisableStrongPassword",
        "passwordProfile": {
            "password": password,
            "forceChangePasswordNextSignIn": true
        },
        "userPrincipalName": requestBody.username + domain,
        "usageLocation": "CN"
    };
    console.log('createUser data ' + post_data);
    const reqOpt = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        },
        body: JSON.stringify(post_data)
    };
    const response = await fetch(url, reqOpt);
    const results = await response.json();
    console.log(results);
    if (results.error != undefined) {
        if (results.error.message == 'Another object with the same value for property userPrincipalName already exists.') {
            return {
                stat: 'username exists'
            };
        }
        return results;
    }

    const assign_results = await assignLicense(requestBody.username + domain, access_token);

    if (assign_results) {
        const account = {
            stat: 'success',
            email: requestBody.username + domain,
            password: password
        };
        return account;
    } else {
        const account = {
            stat: JSON.stringify(assign_results)
        };
        return account;
    }
}

async function handleRequest(request) {

    let url = new URL(request.url);
    let path = url.pathname;

    switch (path) {
        case '/mscript':
            const requestBody = await request.json();

            const ms_token = await get_ms_token();
            const account = await createUser(requestBody, ms_token);

            return new Response(JSON.stringify(account));
            break;
        default:
            return new Response(html, {
                status: 200,
                headers: {
                    "Content-Type": "text/html; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                }
            });
    }
}

addEventListener('fetch', event => {
    return event.respondWith(handleRequest(event.request))
})
