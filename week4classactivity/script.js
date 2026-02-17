// var a = 7;
// var b = 10;
// var c = a + b;

// function showSum() {
//     document.getElementById("result").innerHTML = c;
// }

function calculateResult() {
    var total =
        Number(document.getElementById("s1").value) +
        Number(document.getElementById("s2").value) +
        Number(document.getElementById("s3").value) +
        Number(document.getElementById("s4").value) +
        Number(document.getElementById("s5").value) +
        Number(document.getElementById("s6").value) +
        Number(document.getElementById("s7").value) +
        Number(document.getElementById("s8").value);

    var resultText = "Total Marks: " + total + " / 800<br>";

    if (total >= 700) {
        resultText += "Result: Distinction";
    } 
    if (total >= 600 && total < 700) {
        resultText += "Result: First Class";
    }
    else if (total >= 500 && total < 600) {
        resultText += "Result: Second Class";
    }
    else if (total >= 400 && total < 500) {
        resultText += "Result: Third Class";
    }
    else if (total <= 400) {
        resultText += "Result: Fail";
    } else {
        resultText += "Result: Pass";
    }

    document.getElementById("output").innerHTML = resultText;
}
