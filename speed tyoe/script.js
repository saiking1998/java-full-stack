const apiurl = 'https://api.quotable.io/random'

const quotedisplay = document.getElementById('quotedisp')
const quoteinput = document.getElementById('quotein')
const timer = document.getElementById('timer')
const area={}
quoteinput.addEventListener('input', () => {
    const arrayquote = quotedisplay.querySelectorAll('span')
    const arrayvalue = quoteinput.value.split('')
    let correct = true
    arrayquote.forEach((charspand, index) => {
        const char = arrayvalue[index]
        if (char == null) {
            charspand.classList.remove('incorrect')
            charspand.classList.remove('correct')
            correct = false
        }

        else if (char === charspand.innerText) {
            charspand.classList.add('correct')
            charspand.classList.remove('incorrect')
          
        }
        else {
            charspand.classList.add('incorrect')
            charspand.classList.remove('correct')
            correct = false
        
           
        }
    })
    // if (correct) {
    //     getnewapi()
    // }
    if(arrayquote.length<=arrayvalue.length){
        clearInterval(area.timer)
        setTimeout(getnewapi,3000)
    }

  
})
function newapi() {
    return fetch(apiurl)
        .then(response => response.json())
        .then(data => data.content)
}
async function getnewapi() {
    const quote = await newapi()
    quotedisplay.innerHTML = ''

    quote.split('').forEach(charecter => {
        const charspan = document.createElement('span')

        charspan.innerText = charecter
        quotedisplay.appendChild(charspan)
    })
    quoteinput.value = ''
    timerstart()
}


let starttime
function timerstart() {
    timer.innerText = 0
    starttime = new Date
    area.timer=setInterval(() => {
        timer.innerText = gettime()
    }, 1000)
}

function gettime() {
       
            return Math.floor((new Date - starttime) / 1000)  
       
    
}
getnewapi()

