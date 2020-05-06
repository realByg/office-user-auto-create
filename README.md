# 用cloudflare的workers实现自助创建微软全局子号
# https://m.ur.workers.dev/


1 进入azure AD新建一个app，获取tenant id和client id
![image.png](https://i.loli.net/2020/01/26/57GcEDYlQFTOMBL.png)

2.给 app 授权
![image.png](https://i.loli.net/2020/05/06/NOE18pDfj4QwRAP.png)

3 新建一个client secret
![image.png](https://i.loli.net/2020/01/26/qUeV2x8abHlDPO3.png)

4 获取订阅的 skuid
这里展示用 postman 获取订阅的 skuid 值
![image.png](https://i.loli.net/2020/05/06/pA85byFUBvJKGoR.png)

5 复制 index.js 里面的内容到 cf workers 里面，填入相应的数据

