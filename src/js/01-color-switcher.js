let colorTimeout

function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
    colorTimeout = setTimeout(changeBackgroundColor, 1000)
}

document.getElementById("startButton").addEventListener('click', function() {
    this.disable = true;
    document.getElementById("stopButton").disable = false;
    changeBackgroundColor();
})
   
document.getElementById("stopButton").addEventListener('click', function() {
    this.disable = true;
    document.getElementById("startButton").disable = false;
    clearTimeout(colorTimeout)
})