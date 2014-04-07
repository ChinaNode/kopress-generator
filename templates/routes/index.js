
module.exports = {
    init: function (app) {
        app.get('/', this.index);
    },

    index: function * () {
        this.locals = {
            session: this.session,
            title: 'Kopress'
        };
        yield this.render('index', {name: 'koress index page'});
    }
}