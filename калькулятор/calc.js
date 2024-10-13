
let people = document.getElementById('number1');
let itemPeople = document.getElementById('rangeValue');

let powerHunger = document.getElementById('powerHunger');
let itemHunger = document.getElementById('itemHunger');


//=============================================
people.oninput = function(){
    itemPeople.innerHTML = this.value
}
powerHunger.oninput = function(){
    itemHunger.innerHTML = this.value;
}

/* function myFunction1() {
  var x1 = document.getElementById("chec1").value

    document.getElementById("l1").innerHTML = "Вы выбрали " + x1;
    return x1;
 
} */
//==================================================================

var calculate = document.getElementById("but");
        calculate.onclick = function () {
          const checkedValues = [...document.querySelectorAll('input[name]:checked')]
        	
          const c = Number(checkedValues.length) - 1;
          console.log(c);
        	const a = people.value * 500;
        	const b = powerHunger.value
					let res1 = a * b;

					if (document.getElementById("rad1").checked) {
                var result = res1 /2 /1000 /* /c */;
              
                document.getElementById("res").innerHTML = result + "  кг.";
            } else if (document.getElementById("rad2").checked) {
                var result = res1 /1000 /* / c */;
                document.getElementById("res").innerHTML = result + "  кг.";
            } else if (document.getElementById("rad3").checked) {
                var result = res1 * 2 /1000 /* / c */;
                document.getElementById("res").innerHTML =  result + "  кг.";
            } 

            let rus = result / c;

            console.log(result / c)
            let help1 = document.getElementById('help1');
            help1.innerHTML = rus + "кг.";
            let help2 = document.getElementById('help2');
            help2.innerHTML = rus + "кг.";
            let help3 = document.getElementById('help3');
            help3.innerHTML = rus + "кг.";
            let help4 = document.getElementById('help4');
            help4.innerHTML = rus + "кг.";
            let help5 = document.getElementById('help5');
            help5.innerHTML = rus + "кг.";
           

            
        }



//==================================================================

    function myFunction1() {
      var x1 = document.getElementById("chec1").value
      let element = document.getElementById('l1');
      //let help = document.getElementById('help');
      let Ltext1 = document.getElementById('Ltext1');
      if (element.style.display === 'none') {
          element.style.display = 'block';
          Ltext1.innerHTML = x1;
          //help.innerHTML = rus;
      } else {
          element.style.display = 'none';
      }
    }

    function myFunction2() {
      var x2 = document.getElementById("chec2").value
      let element = document.getElementById('l2');
      let lp1 = document.getElementById('lp2');
      let Ltext1 = document.getElementById('Ltext2');
      if (element.style.display === 'none') {
          element.style.display = 'block';
          Ltext1.innerHTML = x2;
      } else {
          element.style.display = 'none';
      }
    }

    function myFunction3() {
      var x3 = document.getElementById("chec3").value
      let element = document.getElementById('l3');
      let lp3 = document.getElementById('lp3');
      let Ltext1 = document.getElementById('Ltext3');
      if (element.style.display === 'none') {
          element.style.display = 'block';
          Ltext1.innerHTML = x3;
      } else {
          element.style.display = 'none';
      }
    }

    function myFunction4() {
      var x4 = document.getElementById("chec4").value
      let element = document.getElementById('l4');
      let lp4 = document.getElementById('lp4');
      let Ltext1 = document.getElementById('Ltext4');
      if (element.style.display === 'none') {
          element.style.display = 'block';
          Ltext1.innerHTML = x4;
      } else {
          element.style.display = 'none';
      }
    }

    function myFunction5() {
      var x5 = document.getElementById("chec5").value
      let element = document.getElementById('l5');
      let lp5 = document.getElementById('lp5');
      let Ltext1 = document.getElementById('Ltext5');
      if (element.style.display === 'none') {
          element.style.display = 'block';
          Ltext1.innerHTML = x5 ;
      } else {
          element.style.display = 'none';
      }
    }


//=============================================

        


