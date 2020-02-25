// Your code goes here
document.addEventListener('DOMContentLoaded', function() {
    return changeText();
})

function changeText() {
    const newText = document.getElementById('text')
    newText.innerHTML = 'This is really cool!'
}