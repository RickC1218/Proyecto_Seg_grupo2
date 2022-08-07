const controller = {};
//Create
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios set ?', [data], (err, rows) => {
            res.redirect('/')
        });
    });
};
//Read
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios', (err, usuarios) => {
            if(err){
                res.json(err);
            }
            console.log(usuarios);
            res.render('usuarios', {
                data: usuarios
            });
        });
    });
};
//Update
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuarios where id = ?', [id], (err, usuario) => {
            res.render('usuarios_edit', {
                data: usuario[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { id } = req.params;
    const actualizacion = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE usuarios set ? where id = ?', [actualizacion, id], (err, rows) => {
            res.redirect('/')
        });
    });
};

//Delete
controller.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuarios where id = ?', [id], (err, rows) => {
            res.redirect('/')
        });
    });
};

module.exports = controller;