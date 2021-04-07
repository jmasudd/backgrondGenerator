var _ = require('lodash')
var array = [1,1,2,3,3,4,5,6,7]
console.log('answer' ,_.without(array,3))
var body = document.getElementById('BGColor')
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var h4 = document.querySelector('h4')

function colorpicker(){
    body.style.background = 'linear-gradient(to right,'+ color1.value +' , '+ color2.value +')'
    h4.innerHTML = body.style.background + ";"

}



color1.addEventListener('input', colorpicker)
color2.addEventListener('input', colorpicker)