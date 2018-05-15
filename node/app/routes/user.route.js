module.exports = (app) => {
    const users = require('../controllers/user.controller');

    app.get("/users",users.getAll);
    
    app.get("/users/:id",verifyToken,users.getById);

    app.post("/users",verifyToken,users.insertUser);

    app.put("/users/:id",verifyToken,users.updateUser);

    app.delete("users/:id",verifyToken,users.deleteUser);

    app.get('/login/:username/:password',users.login);
    app.get('/after/login/:username/:password',users.afterLoginToken);
    

}

function verifyToken(req, res, next){
   const bearerHeader = req.headers['auth'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    }else{
        res.sendStatus(403);
    }

}