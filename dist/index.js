"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql2_1 = __importDefault(require("mysql2"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.post('/',(req:Request, res:Response)=>{
//     res.send({
//         data:req.body
//     })
// })
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
app.get('/details/:id', (req, res) => {
    var pool = mysql2_1.default.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'Karthikc@123',
        database: 'Training_demo',
        connectionLimit: 10,
        multipleStatements: true
    });
    pool.getConnection(function (err, conn) {
        if (err) {
            console.log("Entered into error");
            console.log(err);
            res.send({
                status: "failed",
                statusCode: 500,
                message: "getting error in db connection"
            });
            return;
        }
        console.log('The id:' + req.params.id);
        conn.query('select * from country where country_id=?', [req.params.id], function (err, rows) {
            if (err) {
                conn.release();
                return res.send({
                    status: "failed",
                    statusCode: 400
                });
            }
            res.send(rows);
            conn.release();
        });
    });
});
app.post('/details', (req, res) => {
    var pool = mysql2_1.default.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'Karthikc@123',
        database: 'Training_demo',
        connectionLimit: 10,
        multipleStatements: true
    });
    pool.getConnection(function (err, conn) {
        if (err) {
            console.log("Entered into error");
            console.log(err);
            res.send({
                status: "failed",
                statusCode: 500,
                message: "getting error in db connection"
            });
            return;
        }
        conn.query('insert into country(country_id,country_name) value(?,?)', [req.body.country_id, req.body.country_name], function (err, rows) {
            if (err) {
                console.log(err);
                conn.release();
                return res.send({
                    status: "failed",
                    statusCode: 400
                });
            }
            res.send({
                status: "successful",
                message: "Created Successfuly"
            });
            conn.
                conn.release();
        });
    });
});
app.patch('/details/:id', (req, res) => {
    var pool = mysql2_1.default.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'Karthikc@123',
        database: 'Training_demo',
        connectionLimit: 10,
        multipleStatements: true
    });
    pool.getConnection(function (err, conn) {
        if (err) {
            console.log("Entered into error");
            console.log(err);
            res.send({
                status: "failed",
                statusCode: 500,
                message: "getting error in db connection"
            });
            return;
        }
        console.log('The id:' + req.params.id);
        conn.query('update country set country_name=? where country_id=?', [req.body.country_name, req.params.id], function (err, rows) {
            if (err) {
                conn.release();
                console.log(err);
                return res.send({
                    status: "failed",
                    statusCode: 400
                });
            }
            res.send({
                status: "successful",
                message: "Updated Successfuly"
            });
            conn.
                conn.release();
        });
    });
});
app.delete('/details/:id', (req, res) => {
    var pool = mysql2_1.default.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'Karthikc@123',
        database: 'Training_demo',
        connectionLimit: 10,
        multipleStatements: true
    });
    pool.getConnection(function (err, conn) {
        if (err) {
            console.log("Entered into error");
            console.log(err);
            res.send({
                status: "failed",
                statusCode: 500,
                message: "getting error in db connection"
            });
            return;
        }
        console.log('The id:' + req.params.id);
        conn.query('delete from country where country_id=? ', [req.params.id], function (err, rows) {
            if (err) {
                conn.release();
                return res.send({
                    status: "failed",
                    statusCode: 400
                });
            }
            res.send({
                status: "successful",
                message: "Deleted Successfuly"
            });
            conn.release();
        });
    });
});
app.get('/details', (req, res) => {
    var pool = mysql2_1.default.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'Karthikc@123',
        database: 'Training_demo',
        connectionLimit: 10,
        multipleStatements: true
    });
    pool.getConnection(function (err, conn) {
        if (err) {
            console.log("Entered into error");
            console.log(err);
            res.send({
                status: "failed",
                statusCode: 500,
                message: "getting error in db connection"
            });
            return;
        }
        console.log('The id:' + req.params.id);
        conn.query('select * from country ', function (err, rows) {
            if (err) {
                conn.release();
                return res.send({
                    status: "failed",
                    statusCode: 400
                });
            }
            res.send(rows);
            conn.release();
        });
    });
});
