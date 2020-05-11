# 用cloudflare的workers实现自助创建微软全局子号
# demo: https://m.ur.workers.dev/


1 进入azure AD新建一个app，获取tenant id和client id
![image.png](https://i.loli.net/2020/01/26/57GcEDYlQFTOMBL.png)

2.给 app 授权，权限为 graph 的 Directory.ReadWrite.All
![image.png](https://i.loli.net/2020/05/06/NOE18pDfj4QwRAP.png)

3 新建一个client secret
![image.png](https://i.loli.net/2020/01/26/qUeV2x8abHlDPO3.png)

4 获取订阅的 skuid，感谢 @tanst 提供方法
> 在 Microsoft 365 admin center 管理面板-账单-许可证
> 然后点击你想看的「许可证」，在地址栏就有 skuid 了



5 配置 reCAPTCHA，前往 https://www.google.com/recaptcha/intro/v3.html 新建一个 reCAPTCHA v2 checkbox 验证，填入你的域名，获取 site key 和 secret 
![image.png](https://i.loli.net/2020/05/11/SC94OsFWmilnJXI.png)



6 复制 index.js 里面的内容到 cf workers 里面，填入相应的数据

