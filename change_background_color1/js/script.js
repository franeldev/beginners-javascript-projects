//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colorArray = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

//default bgColor
body.style.backgroundColor = 'violet';

button.addEventListener('click', () => { 
    body.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)] 
})


//Or

/* function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
} */
