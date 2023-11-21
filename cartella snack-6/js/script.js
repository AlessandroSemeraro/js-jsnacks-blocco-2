const userNumber = parseInt(prompt('type a number'));
console.log(userNumber)

const wrapper = document.querySelector('section.main-content');


for (let i = 0 ; i < userNumber ; i++) {
    wrapper.appendChild(createSquare());
 }

//FUNCTION
function createSquare (squareNum){
  const divElement =document.createElement('div');
  divElement.classList.add('square');
 return divElement;
}