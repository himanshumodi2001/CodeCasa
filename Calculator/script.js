alert("Keyboard also enabled.\nENTER => EQUAL TO\n")
let infoDisplay = document.getElementById('info');
let resultDisplay = document.getElementById('result');
let keys = {
    del: document.getElementById('del'),
    ac: document.getElementById("allclear"),
    mul: document.getElementById("multiple"),
    divide: document.getElementById("divide"),
    percentage: document.getElementById("percentage"),
    minus: document.getElementById('minus'),
    plus: document.getElementById('plus'),
    equal: document.getElementById('equal'),
    one: document.getElementById('one'),
    two: document.getElementById('two'),
    three: document.getElementById('three'),
    four: document.getElementById('four'),
    five: document.getElementById('five'),
    six: document.getElementById('six'),
    seven: document.getElementById('seven'),
    eight: document.getElementById('eight'),
    nine: document.getElementById('nine'),
    zero: document.getElementById('zero'),
    dot: document.getElementById('dot')
}
var result = "";
var userInput = "";
window.addEventListener('keypress', (e) => {
    if (e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9" || e.key == "." || e.key == "/" || e.key == "*" || e.key == "%" || e.key == "+" || e.key == "-")
        userInput += e.key;
    if(e.key=="Enter"){
        infoDisplay.innerText=userInput;
        userInput=String(eval(userInput));
    }
    console.log(e);
    resultDisplay.innerText = userInput;
});
Object.keys(keys).map((value) => {
    keys[value].addEventListener(('click'), () => {
        switch (value) {
            case 'one':
                userInput += "1";
                break;
            case 'two':
                userInput += "2";
                break;
            case 'three':
                userInput += "3";
                break;
            case 'four':
                userInput += "4";
                break;
            case 'five':
                userInput += "5";
                break;
            case 'six':
                userInput += "6";
                break;
            case 'seven':
                userInput += "7";
                break;
            case 'eight':
                userInput += "8";
                break;
            case 'nine':
                userInput += "9";
                break;
            case 'zero':
                userInput += "0";
                break;
            case 'dot':
                userInput += ".";
                break;
            case 'plus':
                userInput += "+";
                break;
            case 'minus':
                userInput += "-";
                break;
            case 'mul':
                userInput += "*";
                break;
            case 'divide':
                userInput += "/";
                break;
            case 'percentage':
                userInput += "%";
                break;
        }
        if(value=='del'){
            userInput=userInput.slice(0,userInput.length-1);
        }
        if(value=='ac'){
            userInput="";
            resultDisplay.innerText=userInput;
            infoDisplay.innerText=userInput;
        }
        if(value=='equal'){
            infoDisplay.innerText=userInput;
            userInput=String(Math.round(eval(userInput)));
        }
        resultDisplay.innerText = userInput;
    })
})