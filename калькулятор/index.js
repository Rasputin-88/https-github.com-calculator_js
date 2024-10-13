

let people = document.getElementById('number1');
let itemPeople = document.getElementById('rangeValue');
console.log(people);
people.oninput = function(){
    itemPeople.innerHTML = this.value;
}


let powerHunger = document.getElementById('powerHunger');
let itemHunger = document.getElementById('itemHunger');
console.log(powerHunger);
powerHunger.oninput = function(){
    itemHunger.innerHTML = this.value;
}


var calculate = document.getElementById("but");
        calculate.onclick = function () {
            var num1 = Number(document.getElementById("number1").value);
            var num2 = Number(document.getElementById("number2").value);
            if (document.getElementById("rad1").checked) {
                var result = num1 * num2 /2
                document.getElementById("res").innerHTML = result;
            } else if (document.getElementById("rad2").checked) {
                var result = num1 * num2 * 1
                document.getElementById("res").innerHTML = result;
            } else if (document.getElementById("rad3").checked) {
                var result = num1 * num2 * 2
                document.getElementById("res").innerHTML = result;
            } 
        }

