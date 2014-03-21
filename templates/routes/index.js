
module.exports = {
    init: function (app) {
        app.get('/', this.index);
    },

    index: function * () {
        yield this.render('index');
    }
}