const output= document.querySelector(".display");
let justEvaluated = false;
function give(input){
    if(justEvaluated && !isNaN(input)){
        output.value = input;
    }
    else{
        output.value += input;
    }
   justEvaluated = false;
  
}
function delet(){
     output.value = output.value.slice(0,-1);
}

function erase(){
    output.value="";
    justEvaluated = false;
}
function assign(){
    try{
        output.value = eval(output.value);
        justEvaluated = true;
    }
    catch(error){
        output.value = "error";
        justEvaluated = true;
    }


}

