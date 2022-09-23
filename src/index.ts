import express from 'express';
import bodyParser  from 'body-parser';
import { Request, Response} from 'express';
import mysql2 from 'mysql2';


const app = express();

app.use(express.json());
// app.post('/',(req:Request, res:Response)=>{
//     res.send({
//         data:req.body
//     })
// })



app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})


app.get('/details/:id', (req:Request, res:Response) => {
    var pool=mysql2.createPool({
        host        :'127.0.0.1',
        user       : 'root',
        password    : 'Karthikc@123',
        database    :'Training_demo',
        connectionLimit :10,
        multipleStatements :true   
    });

    pool.getConnection(function (err:any ,conn:any){
        if(err)
        {
            console.log("Entered into error");
            console.log(err)
            res.send({
                status:"failed",
                statusCode:500,
                message:"getting error in db connection"
            });
            return ;
        }
        console.log('The id:'+req.params.id);
        conn.query('select * from country where country_id=?',[req.params.id],function(err:any,rows:any){
            if(err){
                conn.release();
                return res.send({
                    status:"failed",
                    statusCode:400
                });
            }
            res.send(rows);
            conn.release();
                });

    });
    
});

app.post('/details', (req:Request, res:Response) => {
    var pool=mysql2.createPool({
        host        :'127.0.0.1',
        user       : 'root',
        password    : 'Karthikc@123',
        database    :'Training_demo',
        connectionLimit :10,
        multipleStatements :true   
    });

    pool.getConnection(function (err:any ,conn:any){
        if(err)
        {
            console.log("Entered into error");
            console.log(err)
            res.send({
                status:"failed",
                statusCode:500,
                message:"getting error in db connection"
            });
            return ;
        }
        
        conn.query('insert into country(country_id,country_name) value(?,?)',[req.body.country_id,req.body.country_name],function(err:any,rows:any){
            if(err){
                console.log(err);
                conn.release();
                return res.send({
                    status:"failed",
                    statusCode:400
                });
            }
            res.send({
                status:"successful",
                message:"Created Successfuly"
            });
            conn.
            conn.release();
                });

    });
    
});

app.patch('/details/:id', (req:Request, res:Response) => {
    var pool=mysql2.createPool({
        host        :'127.0.0.1',
        user       : 'root',
        password    : 'Karthikc@123',
        database    :'Training_demo',
        connectionLimit :10,
        multipleStatements :true   
    });

    pool.getConnection(function (err:any ,conn:any){
        if(err)
        {
            console.log("Entered into error");
            console.log(err)
            res.send({
                status:"failed",
                statusCode:500,
                message:"getting error in db connection"
            });
            return ;
        }
        console.log('The id:'+req.params.id);
        conn.query('update country set country_name=? where country_id=?',[req.body.country_name,req.params.id],function(err:any,rows:any){
            if(err){
                conn.release();
                console.log(err);
                return res.send({
                    status:"failed",
                    statusCode:400
                });
            }
            res.send({
                status:"successful",
                message:"Updated Successfuly"
            });
            conn.
            conn.release();
                });

    });
    
});

app.delete('/details/:id', (req:Request, res:Response) => {
    var pool=mysql2.createPool({
        host        :'127.0.0.1',
        user       : 'root',
        password    : 'Karthikc@123',
        database    :'Training_demo',
        connectionLimit :10,
        multipleStatements :true   
    });

    pool.getConnection(function (err:any ,conn:any){
        if(err)
        {
            console.log("Entered into error");
            console.log(err)
            res.send({
                status:"failed",
                statusCode:500,
                message:"getting error in db connection"
            });
            return ;
        }
        console.log('The id:'+req.params.id);
        conn.query('delete from country where country_id=? ',[req.params.id],function(err:any,rows:any){
            if(err){
                conn.release();
                return res.send({
                    status:"failed",
                    statusCode:400
                });
            }
            res.send({
                status:"successful",
                message:"Deleted Successfuly"
            });
            conn.release();
                });

    });
    
});


app.get('/details', (req:Request, res:Response) => {
    var pool=mysql2.createPool({
        host        :'127.0.0.1',
        user       : 'root',
        password    : 'Karthikc@123',
        database    :'Training_demo',
        connectionLimit :10,
        multipleStatements :true   
    });

    pool.getConnection(function (err:any ,conn:any){
        if(err)
        {
            console.log("Entered into error");
            console.log(err)
            res.send({
                status:"failed",
                statusCode:500,
                message:"getting error in db connection"
            });
            return ;
        }
        console.log('The id:'+req.params.id);
        conn.query('select * from country ',function(err:any,rows:any){
            if(err){
                conn.release();
                return res.send({
                    status:"failed",
                    statusCode:400
                });
            }
            res.send(rows);
            conn.release();
                });

    });
    
});






