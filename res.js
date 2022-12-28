'use strict';

exports.ok= function(values){
    var data ={
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
}