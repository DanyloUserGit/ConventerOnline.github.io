'use strict'
let select = document.getElementById('select');
let select2 = document.getElementById('select2');
let al = document.getElementById('al');
let input = document.getElementById('in');
let w = document.getElementById('w');
let res = 0;
function time(){
  al.style.opacity = "0";
}

function calc(){
  //select.options[0].value
  if(select.selectedIndex == 2 && select2.selectedIndex == 2 || select.selectedIndex == 1 && select2.selectedIndex == 1 || select.selectedIndex == 0 && select2.selectedIndex == 0){
    al.style.opacity = "1";
    setTimeout(time, 2500);
  }else if(select.selectedIndex == 0 && select2.selectedIndex == 2){
    res = parseInt(input.value, 2);
    document.getElementById("r").innerHTML = res;
  }else if(select.selectedIndex == 0 && select2.selectedIndex == 1){
    res = parseInt(input.value, 2).toString(16);
    document.getElementById("r").innerHTML = res;
  }else if(select.selectedIndex == 1 && select2.selectedIndex == 0){
    res = parseInt(input.value, 16).toString(2);
    document.getElementById("r").innerHTML = res;
  }else if(select.selectedIndex == 1 && select2.selectedIndex == 2){
    res = parseInt(input.value, 16).toString(10);
    document.getElementById("r").innerHTML = res;
  }else if(select.selectedIndex == 2 && select2.selectedIndex == 0){
    res = parseInt(input.value, 10).toString(2);
    document.getElementById("r").innerHTML = res;
  }else if(select.selectedIndex == 2 && select2.selectedIndex == 1){
    res = parseInt(input.value, 10).toString(16);
    document.getElementById("r").innerHTML = res;
  }
}
