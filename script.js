var db=openDatabase('test','1.0','',3*1024*1024);

function tableCreate(){
    db.transaction(
      function(tx){
          tx.executeSql("create table if not exists strings(string  primary key)");
      }
    )
}

function insertString(n){
    db.transaction(
       function(tx){
        
    tx.executeSql("insert into strings(string) values(?)",[n]);
       }
    );
}

function getAll(resolve,reject){
    db.transaction(
    
    function(tx){
       
        tx.executeSql("select * from strings",[],function(tx,rs){
             let  temp=[];
            for(let x=0;x<rs.rows.length;x++)
                {
            //console.log(rs.rows.item(x).string);
                    temp.push(rs.rows.item(x).string);
                   
                }
            
            console.log(temp);
            console.log("Still in function....!");
            if(temp.length>0)
             resolve(temp);
            else
              reject("no data found");
        })
    });
}
//insertString("Brick!!!");
tableCreate();
//getAll();