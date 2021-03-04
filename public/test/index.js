const btn = document.getElementById('btn')
const title = document.getElementById('title')

const colors = ['green', 'red', 'blue', 'hotpink', 'orange', 'white', 'black', 'yellow', 'purple', 'lightblue']

btn.addEventListener('click', () => {
  title.style.color = colors[Math.floor(Math.random() * colors.length)];
})