const Koa = require('koa');
const cors = require('koa2-cors');
const app = new Koa();
const puppeteer = require('puppeteer');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
// 解决超过监听数的warning
myEmitter.setMaxListeners(0);

// 跨域问题解决 
app.use(cors({
    origin: '*'
}));
app.use(async (ctx, next) => {
    const brower = await puppeteer.launch();
    const page =await brower.newPage();
    await page.goto('http://fashion.qq.com/visual/photo.shtml');
    await page.waitForSelector('img');
    const imgSrc = await page.evaluate(() => {
        const list = [...document.querySelectorAll('img')];
        const imgList = [];
        list.map(el => {
            src: el.getAttribute('src')
            if(el.src != '') {
                imgList.push({
                    src: el.src
                })
            }
        });
       return imgList
    })
    // console.log(imgSrc)
    ctx.body = {
        data: imgSrc
    }
    await next();
})
app.listen(3000, () => {
    console.log('3000端口已经监听')
})

