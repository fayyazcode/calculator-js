

// Clears Screen
function clearScreen() {
    document.getElementById("result").value = "";
  }
  // Displays entered value on screen.
  function display(num) {
    var res = document.getElementById("result");
  var lastVal= res.value.slice(res.value.length - 1);
  var operators=["+","-","/","*","."];
  if(operators.indexOf(lastVal) !== -1 && operators.indexOf(num) !== -1){
    res.value = res.value.slice(0,res.value.length-1)+num
  }
  
  else{
    res.value += num;
  }
   
  }
  function removeOne(){
    var res= document.getElementById('result');
    res.value=res.value.slice(0,-1)
  }