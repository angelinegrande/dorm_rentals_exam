const connection = require('../config/db');

exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM dorm_rentals', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
};

exports.createUser=(req,res)=>{
    const {student,name, room, rate}=req.body;
    
    connection.query('INSERT INTO dorm_rentals (student_id, student_name,room_number, montly_rate) VALUES (?,?,?,?)',[student,name, room, rate],(err,result)=>{
        if(err) throw err;
        res.status(201).json({message:'Enrollement assessment created successfully',id:result.insertId});
    });
}



exports.deleteUser=(req,res)=>{
    const ids=req.params.id;
    connection.query('DELETE FROM dorm_rentals WHERE id=?',[ids],(err,result)=>{
    if(err) throw err;
     if(result.affectedRows>0)
     {
        res.status(200).json({message:'HTPP status 200: User deleted successfully'});

     }else{
        res.status(404).json({message:'REntal assessment not found'});
     }





});
}

