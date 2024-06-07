const connection = require('../config/configDB');

module.exports = (app) => {
    app.post('/login', (req, res) => {
        const email = req.body.email;
        const pass = req.body.pass;
        //login 

        connection.query(login, (error, rows, columns) => {
            if (error) {
                res.json({ status: 0, mensaje: "Error en el servidor. " + error });
            } else if (rows.length === 0) {
                res.json({ status: 0, mensaje: "Usuario incorrecto." });
            } else {
                res.json({ status: 1, mensaje: "Usuario logueado correctamente.", data: rows });
            }
        });
    });

    app.post('/registroUsuario', (req, res) => {
        const email = req.body.email;
        const nombre = req.body.nombres;
        const dob = req.body.fecha_nacimiento;
        const pass = req.body.contrasena;
        const genero = req.body.genero;
       

        connection.query(checkEmailQuery, (error, rows, columns) => {
            if (error) {
                res.json({ status: 0, mensaje: "Error en el servidor. " + error });
            } else if (rows.length === 0) {
                const insertUserQuery = `
                    INSERT INTO Usuarios (id, Email, Nombre, FechaNacimiento, Contrasena, Genero) VALUES (null, "${email}", "${nombre}", "${dob}", "${pass}", "${genero}")
                `;

                connection.query(insertUserQuery, (error, rows, columns) => {
                    if (error) {
                        res.json({ status: 0, mensaje: "Error en el servidor. " + error });
                        console.log(error);
                    } else {
                        res.json({ status: 1, mensaje: "Usuario creado correctamente." });
                    }
                });
            } else {
                res.json({ status: 0, mensaje: "Este email ya se encuentra registrado." });
            }
        });
    });
};
