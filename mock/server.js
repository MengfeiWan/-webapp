const Koa = require('koa');
const Router = require('koa-router');
var KoaBody = require('koa-body');
const app = new Koa();
const router = new Router();
const koaBody = new KoaBody();
router.get('/api', (ctx, next) => {
  ctx.body = 'hello koa2 !'
});
app.use(router.routes())
  .use(router.allowedMethods());
// 加前缀
router.prefix('/api');
const homeListData = require('./home/list.js')
router.get('/homelist/:city/:page', (ctx, next) => {
  console.log('##首页 —— 推荐列表（猜你喜欢）')

  // 参数
  const params = ctx.params
  const paramsCity = params.city
  const paramsPage = params.page

  console.log('当前城市：' + paramsCity)
  console.log('当前页数：' + paramsPage)

  ctx.body = homeListData
});
app.listen(3000);