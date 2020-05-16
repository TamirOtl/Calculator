var exp="",number=true,decimal=false,equals=false,oprators,Precentes=false;
function insert(num) {
    
    if(equals){
      exp=num;
      
      document.querySelector(".screen").value=exp;
      number=true;
      equals=false
    }
     
    else {
     
      exp=document.querySelector(".screen").value+num;
      document.querySelector(".screen").value=exp;
      number=true
   
    }
  }

    
    if(oprators){
    decimal=false

    }
    
    
    
  
  
 function insertDec(dot){
   if( document.querySelector(".screen").value===""){
     exp=0;
    }
    if(number&&!decimal){
      
      document.querySelector(".screen").value=exp+dot;
      decimal=true;
      oprators=false
      
     }
  
   
 }
  function reset(){
    exp=0;
    document.getElementById("screen").value=exp;
    if( document.querySelector(".screen").value==="0"){
      document.querySelector(".screen").value=""
    }
    
  
    
   
  }
  function negative(){
    exp*=-1;
    document.querySelector(".screen").value=exp;
  }
  function Precente(){
    exp/=100
    document.querySelector(".screen").value=exp;
  
    
 
  }
  function equal(){
      if(exp){
        exp=eval(exp)
          document.querySelector(".screen").value=exp;
          equals=true;
          decimal=false
          number=false
        }
       
       
      }
  function oprator(op){
 
    document.querySelector(".screen").value=exp+op;
    oprators=true
    equals=false
  }
  function powerby2(){
    exp=exp*exp
    document.querySelector(".screen").value=exp
  }
  function sqrt(){
    exp=Math.sqrt(exp)
    if(!isNaN(exp))
    document.querySelector(".screen").value=exp;
    else
    document.querySelector(".screen").value="Invalid Input"
    
  }
  function fruction(){
    exp=1/exp;
     if(!isNaN(exp)) {
      document.querySelector(".screen").value=exp;
    
     }
     
    else
    document.querySelector(".screen").value="Cannot divide by 0 "
  }
  function Backspace(){
      const back=document.querySelector(".screen").value;
      document.querySelector(".screen").value=back.substring(0,back.length-1)
    
  }
