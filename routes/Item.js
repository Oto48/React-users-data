const Router = require("koa-router");
//Import Controllers
const itemController = require('../controller/Item');
const router = new Router({ prefix: '/item' });
router.get('/', ctx => {
    let items = itemController.viewItems()
    ctx.body = items
});

router.post('/', ctx => {
    let items = ctx.request;
    items = itemController.addItem(items);
    ctx.response.status = 201;
    ctx.body = items;
});

router.delete('/:id', ctx => {
    const itemId = ctx.params.id;
    let items = ctx.request;
    items = itemController.deleteItem(itemId);
    ctx.response.status = 201;
    ctx.body = items;
});
module.exports = router;