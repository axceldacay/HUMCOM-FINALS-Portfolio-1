function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById("result").textContent = sum
}
function getResult() {
    var value = parseFloat(document.getElementById("value").value)
    if(value % 2 == 0){
        numEv = "THE NUMBER IS EVEN";
        document.getElementById("resultOf").textContent = numEv
    }
    else{
        numOd = "THE NUMBER IS ODD";
        document.getElementById("resultOf").textContent = numOd
    }
    
    if(value <= 1){
        numErr = "INVALID";
        document.getElementById("resultOf").textContent = numErr
    }
    /* will crash --
    else{
        i = 0;
        counter = 0;
        for(i = 1; i <= value; counter++){
        if(i % counter == 0){
            counter = parseInt(counter);
        }
    }
        if(counter <= 2){
        document.getElementById("result2").textContent = "PRIME NUMBER"
        }
        else{
        document.getElementById("result2").textContent = "COMPOSITE NUMBER"
        }
    } */
}
