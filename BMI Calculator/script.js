function bmi(){
    let h = document.getElementById('height').value;

    let w = document.getElementById('weight').value;

    let bmi = w /(h/100 * h/100);

    let total = bmi.toFixed(5);

    document.getElementById('result').innerHTML = "Your BMI is " + total;
    
    
    // BMI Range Messages
let bmiMessage = '';
if (bmi < 18.5) {
bmiMessage = 'Underweight';
} else if (bmi >= 18.5 && bmi < 25) {
bmiMessage = 'Normal';
} else if (bmi >= 25 && bmi < 30) {
bmiMessage = 'Overweight';
} else if (bmi >= 30) {
bmiMessage = 'Obese';
}

document.getElementById('info').innerHTML = `Your BMI category is: ${bmiMessage}`;

if (isNaN(h) || isNaN(w)) {
alert('Please enter valid numbers');
return;
}

}