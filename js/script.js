//canvas

const canvas = document.querySelector("canvas");
canvas.style.backgroundColor = "#ffffff";

const ctx = canvas.getContext("2d");

//image declarations
const bgImg = new Image()
bgImg.src = "./img/bg.jpg"

const arrows = new Image()
arrows.src = ""

const cat = new Image()
cat.src = "./img/cat.png"

const cat2 = new Image()
cat2.src = "./img/cat2.png"

const pltfrm1 = new Image()
pltfrm1.src = "/img/tree1.png"

const pltfrm2 = new Image()
pltfrm2.src = "/img/tree2.png"

const pltfrm3 = new Image()
pltfrm3.src = "/img/lily.png"

const lndobst1 = new Image()
lndobst1.src = "/img/dog.png"

const lndobst2 = new Image()
lndobst2.src = "/img/zombie2.png"

const lndobst3 = new Image()
lndobst3.src = "/img/zombie3.png"

const logo = new Image()
logo.src = ""

const box = new Image()
box.src = "/img/box-empty.png"

const boxCat = new Image()
boxCat.src = "/img/boxcat.png"

const win = new Image()
win.src = "/img/win.jpg"


//audio

let themeSong = new Audio('/sound/bensound-cute.mp3')
themeSong.volume = 0.2
let reachBox = new Audio('/sound/reachbox.wav')
reachBox.volume = 0.4
let die = new Audio('/sound/die.wav')
die.volume = 0.4

//constant values, movement speed, starting positions etc.

const startBtn = document.getElementById('start-button')
const replayBtn = document.getElementById('replay-button')
const splash = document.getElementById('intro')

let catX
let catY
const catHorSpeedValue = 40;
const catVertSpeedValue = 5;
let gameOver = false
isCatGoingLeft = false;
isCatGoingRight = false;
isCatGoingUp = false;
isCatGoingDown = false;
let pltfrmArr0 = []
let pltfrmArr1 = []
let pltfrmArr2 = []
let pltfrmArr3 = []
let landObst1 = []
let landObst2 = []
let landObst3 = []
let pltfrm0Speed=1
let pltfrm1Speed=2.5
let pltfrm2Speed=1.5
let pltfrm3Speed=2
let pltfrmMove=false
let landObst1Speed=3
let landObst2Speed=2
let landObst3Speed=1.5
let animationId
let boxArr
let boxWidth=50
let boxHeight=50
let winCond
let lives
let timer
let intervalId

//animations + obstacle creating

function startGame() {
    
    // startBtn.style.display = "none";
    splash.classList.add('hidden');
    replayBtn.style.display = "block"
    replayBtn.style.visibility = "hidden";
    canvas.style.visibility = "visible";
    canvas.style.display = 'block';
    catX = canvas.width / 2 ;
    catY = 515;
    gameOver=false;
    winCond = 0
    timer = 120
    boxArr=[[75, false],[375, false], [675,false]]
    intervalId = setInterval(() => {if (timer>0) {timer--}},1000)
    animate()
    themeSong.play();
}

function createObst() {
    if (animationId%85 === 0) {
        landObst1.push([lndobst1,-100,435,45,50])
    }
    if (animationId%100 === 0) {
        landObst2.push([lndobst2,900,475,45,50])
    }
    if (animationId%110 === 0) {
        landObst3.push([lndobst3,900,395,45,50])
    }
    if (animationId%175 === 0) {
        pltfrmArr0.push([pltfrm3,-100,340,90,40])
    }
    if (animationId%120 === 0) {
        pltfrmArr1.push([pltfrm1,900,300,90,40])
        }
    if (animationId%105 === 0) {
        pltfrmArr2.push([pltfrm2,-100,260,90,40])
    }
    if (animationId%200 === 0) {
        pltfrmArr3.push([pltfrm3,900,220,90,40])
    }

    // pltfrm2.push(bla)
}

function drawObst() {
    landObst1.forEach(function(obst,index,object) {
        let prop = [Number(JSON.stringify(obst[1])),Number(JSON.stringify(obst[2])),Number(JSON.stringify(obst[3])),Number(JSON.stringify(obst[4]))]
        obst[1] += landObst1Speed
        ctx.drawImage(lndobst1,prop[0],prop[1],prop[2],prop[3])
        if(prop[0]>1200) {
            object.splice(index,1)}
     })
     landObst2.forEach(function(obst,index,object) {
        let prop = [Number(JSON.stringify(obst[1])),Number(JSON.stringify(obst[2])),Number(JSON.stringify(obst[3])),Number(JSON.stringify(obst[4]))]
        obst[1] -= landObst2Speed
        ctx.drawImage(lndobst2,prop[0],prop[1],prop[2],prop[3])
        if(prop[0]>1200) {
            object.splice(index,1)}
     })
     landObst3.forEach(function(obst,index,object) {
        let prop = [Number(JSON.stringify(obst[1])),Number(JSON.stringify(obst[2])),Number(JSON.stringify(obst[3])),Number(JSON.stringify(obst[4]))]
        obst[1] -= landObst3Speed
        ctx.drawImage(lndobst3,prop[0],prop[1],prop[2],prop[3])
        if(prop[0]>1200) {
            object.splice(index,1)}
     })
     pltfrmArr0.forEach(function(obst,index,object) {
        let prop = [Number(JSON.stringify(obst[1])),Number(JSON.stringify(obst[2])),Number(JSON.stringify(obst[3])),Number(JSON.stringify(obst[4]))]
        obst[1] += pltfrm0Speed
        ctx.drawImage(pltfrm3,prop[0],prop[1],prop[2],prop[3])
        if(prop[0]>1200) {
            object.splice(index,1)}
     })
    pltfrmArr1.forEach(function(obst,index,object) {
        let prop = [Number(JSON.stringify(obst[1])),Number(JSON.stringify(obst[2])),Number(JSON.stringify(obst[3])),Number(JSON.stringify(obst[4]))]
        obst[1] -= pltfrm1Speed
        ctx.drawImage(pltfrm1,prop[0],prop[1],prop[2],prop[3])
        if(prop[0]<-600) {
            object.splice(index,1)}
     })
     pltfrmArr2.forEach(function(obst,index,object) {
        let prop = [Number(JSON.stringify(obst[1])),Number(JSON.stringify(obst[2])),Number(JSON.stringify(obst[3])),Number(JSON.stringify(obst[4]))]
        obst[1] += pltfrm2Speed
        ctx.drawImage(pltfrm3,prop[0],prop[1],prop[2],prop[3])
        if(prop[0]>1200) {
            object.splice(index,1)}
     })
     pltfrmArr3.forEach(function(obst,index,object) {
        let prop = [Number(JSON.stringify(obst[1])),Number(JSON.stringify(obst[2])),Number(JSON.stringify(obst[3])),Number(JSON.stringify(obst[4]))]
        obst[1] -= pltfrm3Speed
        ctx.drawImage(pltfrm2,prop[0],prop[1],prop[2],prop[3])
        if(prop[0]<-600) {
            object.splice(index,1)}
     })
}

function animate () {
    if (gameOver === false){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    
    createObst()
    drawObst()
    drawBoxes()
    drawCat()
    checkCollision()
    drawTime()
    if (winCond === 3) {gameOver=true}
    animationId = requestAnimationFrame(animate)
    }
  else if (gameOver === true) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    
    createObst()
    drawObst()
    gameOver=false
    replayBtn.style.visibility = "visible"
    clearInterval(intervalId)
    document.getElementById('replay-button').onclick = () => {
        startGame();
      };
    // drawDeadCat()
    drawResult()
    
  }
}

function drawCat () {
    ctx.drawImage(cat, catX, catY, 45, 50)
    if (isCatGoingLeft) {
        if (catX>0) {
            catX -= catVertSpeedValue;
        }
        isCatGoingLeft=false;
  } else if (isCatGoingRight) {
      if (catX<canvas.width-40) {
        catX += catVertSpeedValue;
        }
       isCatGoingRight=false;
  } else if (isCatGoingUp) {
        if (catY>195) {
            isCatGoingUp = false;
            catY -= catHorSpeedValue
        }
        else if (catY===195) {
            if (catX+20<115 && 85<catX+20 && boxArr[0][1]===false) {
                isCatGoingUp = false;
                boxArr[0][1]=true
                catX = canvas.width / 2 ;
                catY = 515;
                winCond+=1
                reachBox.play()
            } else if (catX+20<415 && 385<catX+20 && boxArr[1][1]===false) {
                isCatGoingUp = false;
                boxArr[1][1]=true
                catX = canvas.width / 2 ;
                catY = 515;
                winCond+=1
                reachBox.play()
            } else if (catX+20<715 && 685<catX+20 && boxArr[2][1]===false) {
                isCatGoingUp = false;
                boxArr[2][1]=true
                catX = canvas.width / 2 ;
                catY = 515;
                winCond+=1
                reachBox.play()
            }
        } 
        
  } else if (isCatGoingDown) {
      if (catY<515) {
        catY += catHorSpeedValue
        isCatGoingDown = false;
      }
        
}
}

function drawBoxes() {
    boxArr.forEach(el => {
        if (el[1]===false) {
        ctx.drawImage(box, el[0], 205-boxHeight,boxWidth,boxHeight)
        }
        else if (el[1]===true) {
        ctx.drawImage(boxCat, el[0], 205-boxHeight,boxWidth,boxHeight)
        
        }
    })
}

function checkCollision() {
    if (catY===475) {
        landObst2.forEach(obst => {
            if (catX >= obst[1]-15 && catX <= obst[1]+obst[3]-35) {
                gameOver=true
                die.play()
            }
        })
    }
    if (catY===435) {

        landObst1.forEach(obst => {
            if (catX >= obst[1]-15 && catX <= obst[1]+obst[3]-25) {
                gameOver=true
                die.play()
            }
        })
    }
    if (catY===395) {
        landObst3.forEach(obst => {
            if (catX >= obst[1]-15 && catX <= obst[1]+obst[3]-35) {
                gameOver=true
                die.play()
            }
        })
    }
    if (catY===315) {
        pltfrmMove=false
        if (catX>canvas.width) {
            gameOver=true
            die.play()
        }
        pltfrmArr0.forEach(pltfrm => {
        if (catX >= pltfrm[1]-15 && catX <= pltfrm[1]+pltfrm[3]-30) {
                catX+=pltfrm0Speed
                pltfrmMove=true
            }
        })
        if (pltfrmMove===false) {
            gameOver=true
            die.play()
        }
    }
    if (catY===275) {
        pltfrmMove=false
        if (catX+20<0) {
            gameOver=true
            die.play()
        }
        pltfrmArr1.forEach(pltfrm => {
        if (catX >= pltfrm[1]-20 && catX <= pltfrm[1]+pltfrm[3]-25) {
                catX-=pltfrm1Speed
                pltfrmMove=true
            }
        })
        if (pltfrmMove===false) {
            gameOver=true
            die.play()
        }
    }
    if (catY===235) {
        pltfrmMove=false
        if (catX>canvas.width) {
            gameOver=true
            die.play()
        }
        pltfrmArr2.forEach(pltfrm => {
        if (catX >= pltfrm[1]-15 && catX <= pltfrm[1]+pltfrm[3]-30) {
                catX+=pltfrm2Speed
                pltfrmMove=true
            }
        })
        if (pltfrmMove===false) {
            gameOver=true
            die.play()
        }
    }
    if (catY===195) {
        pltfrmMove=false
        if (catX+20<0) {
            gameOver=true
            die.play()
        }
        pltfrmArr3.forEach(pltfrm => {
        if (catX >= pltfrm[1]-20 && catX <= pltfrm[1]+pltfrm[3]-25) {
                catX-=pltfrm3Speed
                pltfrmMove=true
            }
        })
        if (pltfrmMove===false) {
            gameOver=true
            die.play()
        }
        
    }
   
}

function drawDeadCat() {
    ctx.drawImage(cat2, catX, catY, 45, 50)
}

function drawTime() {
    // setInterval(() => {if (timer>0) {timer--}},1000)
    ctx.font ='bold 20px Verdana'
    ctx.textAlign='right'
    ctx.fillStyle='SlateBlue'
    ctx.fillText(timer, canvas.width-10, 30)
    if (timer===0) {gameOver=true}
}

function drawResult() {
    if (winCond===3) {
        ctx.font = 'bold 40px Verdana'
        ctx.textAlign="center"
        setTimeout(ctx.clearRect(0, 0, canvas.width, canvas.height),2000)
        ctx.drawImage(win,117,0,565,565)
        ctx.fillStyle='#4285f4'
        ctx.fillText('Nice one! You win!', 400, 260)
        ctx.fillText('Thanks for playing :)', 400, 310)
    }
    else {
        drawDeadCat()
        ctx.font = 'bold 40px Verdana'
        ctx.textAlign="center"
        ctx.fillStyle='#4285f4'
        ctx.fillText('You lost! Play again?', 400, 260)
        ctx.fillText('Click the replay button on top!', 400, 310)
    }
    

}


//event listeners (key presses, clicks)

document.addEventListener("keydown", (function(canMove) {return function(event) {
    if (event.code === "ArrowLeft") {
        isCatGoingLeft = true;
        }
    if (event.code === "ArrowRight") {
        isCatGoingRight = true;
    }
    if (!canMove) return false;
    canMove = false;
    setTimeout(function() { canMove = true; }, 500);
    if (event.code === "ArrowUp") {
        isCatGoingUp = true;
      }
    if (event.code === "ArrowDown") {
        isCatGoingDown = true;
    }
    }
  })(true),false);

  document.addEventListener("keyup", event => {
    isCatGoingLeft = false;
    isCatGoingRight = false;
    isCatGoingUp = false;
    isCatGoingDown = false;
  });

  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
      
    };
  }