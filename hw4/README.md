## hw4作业分析

#### 是一个瀑布流的作业，瀑布流可以采用纯css或者js来实现。为了自我拓展，选用了nodejs(koa2框架)爬虫+js实现
###### 启动服务
```
cd hw4
npm install
cd server
node index.js
```
* 一般采用nodejs直接爬虫，就是很简单 通过http(由于本身喜欢axios，采用这个ajax库)请求配合cheerio解析网页，然后获取想要的数据
* 但是对于spa/登录校验/数据是异步获取的就有心无力，采用了headless brower来解决
```
google：Puppeteer
PhantomJS
```
phantomJs需要下载，对google的热爱采用了puppeteer
* 数据采用了腾讯视频的图片，两种处理，一种通过koa2输出为接口/fs库下载为文件（都支持）
    >前后端分离通过接口的话，直接localhost:3000是输出一个json
    >想下载到本地是采用路由的方式，通过localhost:3000/download方式将会下载远程爬虫图片到本地images文件夹(开发时间问题，暂不开发)
* 前端采用fetch来发送请求，但是遇到Access-Control-Allow-Origin跨域问题，用fetch的设置加上
```
    fetch(url, {
        mode: 'cors'
    })
```
来开启cors跨域，koa2通过koa2-cors模块支持cors跨域。
```
    app.use(cors({
        origin: '`*'
    }))
```
* 由于需要根据数组长度动态获取数据，操作太多dom而且麻烦，采用vue来完成。


    