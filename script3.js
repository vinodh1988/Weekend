 var xhttp = new XMLHttpRequest();
//Step 1 creation of object for http request



xhttp.onreadystatechange=function(){
   if(this.readyState==1)
       console.log("request prepared");
   if(this.readyState==4 && this.status==200){
      let temp= JSON.parse(this.responseText);
       console.log(temp);
       let content=document.getElementById('tdata').innerHTML;
       for(let i=0;i<temp.length;i++){
           content+="<tr>";
           content+="<td>"+temp[i].name+"</td>";
            content+="<td>"+temp[i].message+"</td>";
            content+="<td>"+temp[i].course+"</td>";
            content+="<td>"+temp[i].email+"</td>";
            content+="<td>"+temp[i].reviewdate+"</td>"
            content+="</tr>";
       }
       document.getElementById("tdata").innerHTML=content;
   }
}
//step listen to changes in the object(readystate)

//step 3 --open a request
console.log("lets check");
xhttp.open("GET","http://139.59.95.150:8898/rest-api/reviews",true);

xhttp.send();


function handledata(){
    let obj={
        name:document.getElementById("name").value,
        message:document.getElementById('message').value,
        course:document.getElementById('course').value,
        email:document.getElementById('email').value,
        reviewdate: new Date().toString()
    }
    console.log(obj);
    let htp=new XMLHttpRequest();
  
    htp.onreadystatechange=function(){
        console.log("Working");
        console.log(obj);
     
       console.log(this.readyState+" is printing");
        if(this.readyState==4){
            alert(this);
            
            alert(this.responseText);
            alert(this.getAllResponseHeaders());
            alert("Data is stored");
            console.log(this);
               alert("wait");
        }
    }
htp.open("POST", "http://139.59.95.150:8898/rest-api/reviews", true);
htp.setRequestHeader('Content-type','application/json');
    htp.send(JSON.stringify(obj));
}