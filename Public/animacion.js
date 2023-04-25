let number1 = document.getElementById('number')
let number2 = document.getElementById('number2')
let number3 = document.getElementById('number3')
let numero1= parseInt(number1.innerHTML)
let numero2= parseInt(number2.innerHTML)
let numero3= parseInt(number3.innerHTML)
let counter1= 0
let counter2= 0
let counter3= 0
setInterval( () => {
    if(counter1 == numero1)
    {
        clearInterval();
    }
    else{
        counter1++
        number1.innerHTML = counter1 + "%"
    }

}, 60)

setInterval( () => {
    if(counter2 == numero2)
    {
        clearInterval();
    }
    else{
        counter2++
        number2.innerHTML = counter2 + "%"
    }

}, 60)

setInterval( () => {
    if(counter3 == numero3)
    {
        clearInterval();
    }
    else{
        counter3++
        number3.innerHTML = counter3 + "%"
    }

}, 60)
