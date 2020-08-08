let button = document.querySelector('#btn');
let value = document.querySelector('#hex-value');

//default bgColor
document.body.style.backgroundColor = '#FAFAD2';

button.addEventListener('click', () => {
let colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hex = '#'
let n1 = colors[Math.floor(Math.random() * colors.length)];
let n2 = colors[Math.floor(Math.random() * colors.length)];
let n3 = colors[Math.floor(Math.random() * colors.length)];
let n4 = colors[Math.floor(Math.random() * colors.length)];
let n5 = colors[Math.floor(Math.random() * colors.length)];
let n6 = colors[Math.floor(Math.random() * colors.length)];
let randomColor = '#'+n1+n2+n3+n4+n5+n6;
value.textContent = randomColor;
document.body.style.backgroundColor = randomColor;
})


//OR
/* (function() {
    const button = document.querySelector('#btn')
    const body = document.querySelector('body')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')

    button.addEventListener('click', changeHex)

    function changeHex(){
        let hex = '#'

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
        value.textContent = hex
        body.style.backgroundColor = hex
    }
} )() */