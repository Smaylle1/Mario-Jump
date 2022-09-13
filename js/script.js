const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");








const jump = () =>{
    mario.classList.add('jump');
    
    setTimeout(() =>{
        mario.classList.remove('jump'); 
    }, 550);
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px' , ''));


    if (pipePosition <= 105 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/over.png';
        mario.style.width ='60px';
        mario.style.marginLeft = '50px';
    }

    if (pipePosition === 0) { 
        counter ++ 
    }

}, 10);

const restartGame = () => window.location.reload();



document.addEventListener('keyup', e => e.key !== "r" ? jump : restartGame());
document.addEventListener('click', e => e.key !== "dtPress" ? click : dtPress ());
document.addEventListener('click', jump);
document.addEventListener('keydown', jump);

resetBtn.addEventListener('click', e => restartGame());

