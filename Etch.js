container = document.querySelector("#container");


for (let i = 0; i < 16*16; i++){
    let box = document.createElement('div');
    box.setAttribute('id', 'box')
    box.addEventListener('mouseover', function() { this.style.backgroundColor = 'black'})
    box.addEventListener('click', function(){ this.style.backgroundColor = 'white'})
    container.appendChild(box);
}

