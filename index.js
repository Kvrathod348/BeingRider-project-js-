const themeMood=document.getElementById('theme-btn')
const bodyMood=document.getElementById('body')

themeMood.addEventListener('click' , function(){
    this.classList.themeMood('src=./moon.png');
}) 