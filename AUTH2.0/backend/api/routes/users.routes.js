module.exports = (router, app) => {
    const controller = require('../controllers/users.controller')();

    router.get("/users", app.oauth.authorise(), controller.getAll);
    router.post("/users", app.oauth.authorise(), controller.add);
    router.put("/users", app.oauth.authorise(), controller.update);
    router.delete("/users/:_id", app.oauth.authorise(), controller.delete);
    router.get("/users/:_id", app.oauth.authorise(), controller.getUser);
    return router;
};