const buttonStart = document.getElementById('btn-start');
console.log(buttonStart)

const buttonEnd = document.getElementById('btn-end');
console.log(buttonEnd)

const secondsOutput = document.getElementById('seconds');
console.log(secondsOutput)

let clock;
buttonStart.addEventListener('click',function(){
    clock = setInterval ( function(){
    secondsOutput.innerHTML = parseInt (secondsOutput.innerText, +10)+1;
    }, 1000);
})

buttonEnd.addEventListener('click',function(){
    clearInterval(clock);
})



//FUNCTION//
