const ball = document.querySelector('.ball');
const numberrolled = document.querySelector('.SSS');
const show = document.querySelector('.show')
const container = document.querySelector('.container')
const reset = document.querySelector('.reset')
console.log(numberrolled)
let count = 0;
let maxcount = 10;
let previous = 0;
console.log(ball);
let roolval = 1
let newrool = 0;
var Array1 = []

var finalarray = []

ball.addEventListener('click', roll1)

function roll1() {
    
    if (roolval == 1 && count < maxcount) {
        newrool = Math.floor(Math.random() * 10) + 1
        // addtoarray()
        Array1.push(newrool)
        previous = newrool;
        numberrolled.innerText = '';
        numberrolled.innerText = newrool;
        if (newrool == 10) {
            show.innerText = '';
            show.innerText = 'Wooohooo!! Strike keep going'
        } else {
            show.innerText = '';
            show.innerText = 'click for second roll'
        }



        ball.classList.add('play');
        console.log(ball)
        setTimeout(() => {
            ball.classList.remove('play')
            console.log(ball)
        }, 2000)
        console.log('first roll')
        if (newrool < 10) {
            roolval = 2;
        }
        console.log(Array1)
        if (newrool == 10) {
            count++;
            console.log(count)

        }
        if (count >= maxcount) {
            ball.removeEventListener('click', roll1)
           
            checkmorerolls()
        }
       

        return
    }
    if (roolval == 2 && count < maxcount) {
        let remaining = 10;
        remaining = remaining - newrool
        newrool = Math.floor(Math.random() * remaining) + 1

        // addtoarray()
        Array1.push(newrool)
        numberrolled.innerText = '';
        numberrolled.innerText = newrool;

        if (previous + newrool == 10) {
            show.innerText = '';
            show.innerText = 'Nice !! Spare rool for next round'

        } else {
            show.innerText = '';
            show.innerText = 'click for the nextround first roll'
        }



        ball.classList.add('play');
        console.log(ball)
        setTimeout(() => {
            ball.classList.remove('play')
            console.log(ball)
        }, 2000)
        roolval = 1;
        console.log('second roll')
    }
    console.log(Array1)
    if (previous != 10) {
        count++
        console.log(count)
    }
    if (count >= maxcount) {
        ball.removeEventListener('click', roll1)
       
        checkmorerolls()
    }
    
    return
}


function checkmorerolls() {
    console.log("ekfyhgvejkfvjkye")
    if (count >= 10 && count <= 11) {
        ball.addEventListener('click',roll2)
        function roll2() {
            if (Array1[Array1.length - 1] == 10 && Array1[Array1.length - 2] != 0) {
                show.innerText = '';
                show.innerText = 'you rolled strike in previous round so u get two maorestrike'
                roolval = 1
                count = 0
                maxcount = 2
                
                if (count < maxcount) {
                   
                    newrool = Math.floor(Math.random() * 10) + 1
                    // addtoarray()
                    Array1.push(newrool)
                    previous = newrool;
                    numberrolled.innerText = '';
                    numberrolled.innerText = newrool;
                    if (newrool == 10) {
                        show.innerText = '';
                        show.innerText = 'Wooohooo!! Strike keep going'
                    }
                    ball.classList.add('play');
                
                    setTimeout(() => {
                        ball.classList.remove('play')
                        
                    }, 2000)
    
                    console.log(Array1)
                    if (newrool == 10) {
                        count++;
                        
    
                    }
                    if (count >= maxcount) {
                        ball.removeEventListener('click',roll2)
                        
                        checkscore()
                    }
                   
    
                    return
                }
            }
            else if (Array1[Array1.length - 1] + Array1[Array1.length - 2] == 10) {
                show.innerText = '';
                show.innerText = 'you rolled spare in previous round so u get one more estrike'
                roolval = 1
                maxcount = 1
                count = 0
                if (count < maxcount) {
                    
                    newrool = Math.floor(Math.random() * 10) + 1
                    // addtoarray()
                    Array1.push(newrool)
                    previous = newrool;
                    numberrolled.innerText = '';
                    numberrolled.innerText = newrool;
                    if (newrool == 10) {
                        show.innerText = '';
                        show.innerText = 'Wooohooo!! Strike keep going'
                    }
                    ball.classList.add('play');
                    console.log(ball)
                    setTimeout(() => {
                        ball.classList.remove('play')
                        console.log(ball)
                    }, 2000)
    
                    console.log(Array1)
                    if (newrool == 10) {
                        count++;
                        console.log(count)
    
                    }
                    if (count >= maxcount) {
                        ball.removeEventListener('click',roll2)
                        
                        checkscore()
                    }
                    
    
                    return
                }
            }
            else{
                console.log("e;ofutgeasf")
                show.innerText = '';
                show.innerText = 'click to get your score'
                checkscore()
                return
            }
        }

   
    }
}

function checkscore() {
    console.log('this is a test')
    function game (array) {
        let score = 0;
        let rollindex = 0;
        let frames = []
        for (let frameindex = 1; frameindex <=10; frameindex++) {
            //strikethrough
            if(Array1[rollindex]===10){
                score=10+Array1[rollindex+1]+Array1[rollindex+2]
                rollindex++;
                frames.push(score)
            }
            //spare frames
            else{
                let framescore = Array1[rollindex]+Array1[rollindex+1]
                if(framescore==10){
                    score=10+Array1[rollindex+2]
                    frames.push(score)
                    rollindex+=2;
                }
                else{
                    score=Array1[rollindex]+Array1[rollindex+1]
                    frames.push(score)
                    rollindex+=2;
                }
            }

            //normal
        }
        let finalscore = frames.toString()

        let totalscore = 0;
        for (let i = 0; i <frames.length; i++){
            totalscore = totalscore+frames[i]
        }
        container.style.marginTop='20%';
        ball.style.display='none';
        reset.style.display='block';

        show.innerText = '';
            show.innerText = `your every round score is ${finalscore} and your total score ${totalscore}`

    }
    game(Array1)
}
reset.addEventListener('click',reload)
function reload(){
    location.reload();
}


