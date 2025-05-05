function convert(){
        var value = parseFloat(document.getElementById("value").value);
        var cmCon = value * 100000;
        document.getElementById("result").textContent = value + " KILOMETER/S is " + cmCon + " in Centimeters"
}