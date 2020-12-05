# 用cloudflare的workers实现自助创建微软全局子号
# demo: https://holy-cell-03d7.ur.workers.dev/


# 无需激活码版在 `old` 文件夹中

1 进入 `Azure Active Directory` 新建一个 `app`，获取 `tenant id` 和 `client id`
![image.png](https://i.loli.net/2020/01/26/57GcEDYlQFTOMBL.png)

2.给 `app` 授权，权限为 `graph` 的 `Directory.ReadWrite.All`
![image.png](https://i.loli.net/2020/05/06/NOE18pDfj4QwRAP.png)

3 新建一个 `client secret`
![image.png](https://i.loli.net/2020/01/26/qUeV2x8abHlDPO3.png)

4 获取订阅的 `skuid`，感谢 @tanst 提供方法
> 在 Microsoft 365 admin center 管理面板-账单-许可证
> 然后点击你想看的「许可证」，在地址栏就有 skuid 了



5 配置 `reCAPTCHA`，前往 https://www.google.com/recaptcha/intro/v3.html 新建一个 `reCAPTCHA v2 checkbox` 验证，填入你的域名，获取 `site key` 和 `secret`
![image.png](https://i.loli.net/2020/05/11/SC94OsFWmilnJXI.png)



6 复制 `worker.js` 里面的内容到 `cf workers` 里面，填入相应的数据



# 带激活码版

`code_api_link` 值为激活码 `api` 接口链接， `api` 链接查询数据库并返回`true`或`false` ，`web`服务器 + `sql`数据库即可实现

> telegram@ratherbeasleep 可有偿定制 `api`
