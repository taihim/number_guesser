const guess = document.querySelector('#guess-input');
const check = document.querySelector('#guess-value');
const replay = document.querySelector('#replay');
const message = document.querySelector('.message');

let min = 1,
    max = 10,
    tries = 3;

const rand = Math.floor((((Math.random() * (max-min+1)) + min)));



check.addEventListener('click', checkVal);
replay.addEventListener('click', restart);    


function checkVal(e)
{
    let x = parseInt(guess.value);
    console.log(x);
    
    if(isNaN(x) || x < min || x > max)
    {
        setMessage('Please enter a valid number', 'red');
        guess.style.borderColor='red';
    }

    else
    {
        if(x === rand)
            {    
                gameOver(true)
                setMessage(`${x} is correct.`, 'green');
            }
        
        else
            {
                tries--;
                guess.value = '';
                setMessage(`${x} is incorrect, you have ${tries} guesses left`, 'red');
            }
    
    
        if(tries===0)
            {
                gameOver(false);
                setMessage(`Sorry game over, the correct answer was ${rand}`, 'red');
            }


    }
}

function setMessage(msg, color)
{
    message.style.color = color;
    message.textContent = msg;
}


function restart()
{
    document.location.reload();
}


function gameOver(won)
{
    let color;
    won === true ? color = 'green' : color = 'red';
    check.style.display = 'none';
    guess.disabled = 'disabled';
    guess.style.borderColor = color;
    replay.style.display = 'block';
}