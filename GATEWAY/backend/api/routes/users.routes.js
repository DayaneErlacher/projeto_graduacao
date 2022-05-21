module.exports = app => {
    const controller = require('../controllers/users.controller')();

    app.route('/api/users').get(controller.getAll);
    app.route('/api/users/:_id').get(controller.getById);
    app.route('/api/users').post(controller.add);
    app.route('/api/users/:_id').delete(controller.delete);
    app.route('/api/users').put(controller.update);
}