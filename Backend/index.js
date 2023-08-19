const express=require('express');
const mysql=require('mysql');
const cors=require('cors');


const app=express();
app.use(cors());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'data'

})

app.get('/',(req,res)=>{
    return res.json("hello");

})
app.get('/user',(req,res)=>{
const sql="select * from info";
db.query(sql,(err,data)=>{
    if(err)return res.json(err);
    return res.json(data);
})
})

app.get('/saleEntry',(req,res)=>{
const sql="select * from sale_entry";
db.query(sql,(err,data)=>{
    if(err)return res.json(err);
    return res.json(data);
})
})

app.get('/saleRegister',(req,res)=>{
const sql="select * from sale_entry_register";
db.query(sql,(err,data)=>{
    if(err)return res.json(err);
    return res.json(data);
})
})

app.get('/purchaseEntry',(req,res)=>{
    const sql="select * from purchase_entry";
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
    });


    app.get('/PurchaseEntryRegister',(req,res)=>{
        const sql="select * from purchase_entry_register";
        db.query(sql,(err,data)=>{
            if(err)return res.json(err);
            return res.json(data);
        })
        })

        app.get('/ItemMaster',(req,res)=>{
            const sql="select * from Item_Master";
            db.query(sql,(err,data)=>{
                if(err)return res.json(err);
                return res.json(data);
            })
            })

            app.get('/PartyMaster',(req,res)=>{
                const sql="select * from Party_Master";
                db.query(sql,(err,data)=>{
                    if(err)return res.json(err);
                    return res.json(data);
                })
                })
    

app.listen(3002,()=>{
    console.log('running');
})