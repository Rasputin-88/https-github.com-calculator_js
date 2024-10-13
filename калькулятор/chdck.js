//const checkedValue = document.querySelector('input[type="checkbox"]:checked')?.value;

const help = document.getElementById('help');
help.onclick = function(){
    const checkedValues = [...document.querySelectorAll('input[name]:checked')]
                       .map(checkbox => checkbox.value);
                       console.log(checkedValues);
}
