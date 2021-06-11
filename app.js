

// Clears Screen
function clearScreen() {
    document.getElementById("result").value = "";
  }
  // Displays entered value on screen.
  function display(value) {
    let res = document.getElementById("result");
  
    res.value += value;
  }