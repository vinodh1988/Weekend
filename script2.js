var global=[];

function slideshow(){
    let images=["bean.jpg","family.jpg","mickey.jpg","popoye.jpg","random.jpg","tom.jpg"];
    /* it generates random number b/w 0 to 1*/
   let index=Math.floor(Math.random()*6);
    document.images[0].src="images/"+images[index];
}

setInterval(slideshow,3000);

function store(){
let temp= document.forms[0].data.value;
    if(temp===undefined || temp.length==0)
        alert("Please fill the text box");
    
    insertString(temp);
    alert("Check the database");
    location.reload();
}

new Promise(function(resolve,reject){
    getAll(resolve,reject);
}).then(function(success){
     global=success;
     let content=document.getElementById('retrieved').innerHTML;
      for(let i=0;i<success.length;i++)
          content+="<div class='stringbox'>"+success[i]+"</div>";
    
      document.getElementById('retrieved').innerHTML=content;
}).catch(function(fail){
    console.log(fail);
});

function check(){
    var regex=new RegExp(document.forms[1].data.value);
    let content="";
      for(let i=0;i<global.length;i++){
          if(regex.test(global[i]))
          content+="<div class='stringbox'>"+global[i]+"</div>";
      }
     
    document.getElementById('strings').innerHTML=content;
}


console.log("function call over......!!!!!")






