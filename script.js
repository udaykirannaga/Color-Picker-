let colorPickerContainer =document.getElementById("colorPickerContainer");
let spancode = document.getElementById("selectedColorHexCode");
let buttonof1 = document.getElementById("button1").textContent;
let buttonof2 = document.getElementById("button2").textContent;
let buttonof3 = document.getElementById("button3").textContent;
let buttonof4 = document.getElementById("button4").textContent;
let buttonof5 = document.getElementById("button5").textContent;


function button1(){
    colorPickerContainer.style.backgroundColor = buttonof1;
    spancode.textContent = buttonof1;
}


function button2(){
    colorPickerContainer.style.backgroundColor = buttonof2;
    spancode.textContent = buttonof2;
}


function button3(){
    colorPickerContainer.style.backgroundColor = buttonof3;
    spancode.textContent = buttonof3;
}

function button4(){
    colorPickerContainer.style.backgroundColor = buttonof4;
    spancode.textContent = buttonof4;
}

function button5(){
    colorPickerContainer.style.backgroundColor = buttonof5;
    spancode.textcontent = buttonof5;
}

