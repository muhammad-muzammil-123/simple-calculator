var screen = document.getElementById("screen");

function calculator(num){
     var lastValue = screen.value.slice(screen.value.length - 1);
     var operator = ["+", "-", "*","/","%"];
    if(operator.indexOf(lastValue) !== -1 && operator.indexOf(num) !== -1){
        screen.value = screen.value.slice(0,-1) + num
    } else{
        screen.value += num
    }
   
   
}

function screenClear(){
    screen.value = "";
}
// function operator(opt){
//  screen.value += opt

// }
function calculation(){
    var finalNum = screen.value;
    var result = eval(finalNum);
    screen.value = result;
    if(screen.value == undefined){
        alert("please enter a valid operation");
    }
  
    
    
  
}


