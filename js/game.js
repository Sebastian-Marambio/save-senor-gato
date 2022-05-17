//canvas

const canvas = document.querySelector("canvas");
canvas.style.backgroundColor = "#ffffff";

const ctx = canvas.getContext("2d");

//image declarations
const bgImg = new Image()
bgImg.src = "./img/bg1.jpg"

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

const logo = new Image()
logo.src = ""

<<<<<<< HEAD
const box = new Image()
box.src = "/img/box-empty.png"

const boxCat = new Image()
boxCat.src = "/img/boxcat.png"

const startBtn = document.getElementById('start-button')
const replayBtn = document.getElementById('replay-button')

//constant values, movement speed, starting positions etc.

let catX
let catY
=======
const crash = new Image()
crash.src = ""

const startBtn = document.getElementById('start-button')

//constant values, movement speed, starting positions etc.

let catX = canvas.width / 2 
let catY = 515;
>>>>>>> 6c9f462c3e342fd02655100bebb42e31b78a26cc
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
let pltfrm3Speed=1
<<<<<<< HEAD
let pltfrmMove=false
let landObst1Speed=3
let landObst2Speed=2
let landObst3Speed=1
let animationId
let boxArr
let boxWidth=50
let boxHeight=50
let winCond
let lives

//animations + obstacle creating

function startGame() {
    startBtn.style.display = "none";
    replayBtn.style.display = "none";
    canvas.style.display = "block";
    catX = canvas.width / 2 ;
    catY = 515;
    gameOver=false;
    winCond = 0
    boxArr=[[175, false],[375, false], [575,false]]
    animate();
=======
let landObst1Speed=3
let landObst2Speed=2
let landObst3Speed=0
let animationId

//animations

function startGame() {
    startBtn.style.display = "none";
    canvas.style.display = "block";
    requestAnimationFrame(animate);
>>>>>>> 6c9f462c3e342fd02655100bebb42e31b78a26cc
}

function createObst(id) {
    if (animationId%125 === 0) {
<<<<<<< HEAD
        landObst1.push([lndobst1,-200,435,45,50])
    }
    if (animationId%100 === 0) {
        landObst2.push([lndobst2,1000,475,45,50])
=======
        landObst1.push([lndobst1,-200,460,40,40])
    }
    if (animationId%100 === 0) {
        landObst2.push([lndobst2,1000,420,40,40])
>>>>>>> 6c9f462c3e342fd02655100bebb42e31b78a26cc
    }
    if (animationId%175 === 0) {
        pltfrmArr0.push([pltfrm3,-200,340,90,40])
    }
    if (animationId%120 === 0) {
        pltfrmArr1.push([pltfrm1,1000,300,90,40])
        }
    if (animationId%105 === 0) {
        pltfrmArr2.push([pltfrm2,-200,260,90,40])
    }
    if (animationId%265 === 0) {
        pltfrmArr3.push([pltfrm3,1000,220,90,40])
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
<<<<<<< HEAD
    drawBoxes()
    drawCat()
    checkCollision()
    drawScore()
    animationId = requestAnimationFrame(animate)
    }
  else if (gameOver === true) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    
    createObst()
    drawObst()
    drawDeadCat()
    // drawResult()
    gameOver=false
    replayBtn.style.display = "block"
    document.getElementById('replay-button').onclick = () => {
        startGame();
      };
=======
    drawCat()
    animationId = requestAnimationFrame(animate)
    }
  else if (gameOver === true) {
    drawResult()
>>>>>>> 6c9f462c3e342fd02655100bebb42e31b78a26cc
  }
}

function drawCat () {
<<<<<<< HEAD
    ctx.drawImage(cat, catX, catY, 45, 50)
    console.log(catY)
=======
    ctx.drawImage(cat, catX, catY, 50, 50)
>>>>>>> 6c9f462c3e342fd02655100bebb42e31b78a26cc
    if (isCatGoingLeft) {
        catX -= catVertSpeedValue;
        isCatGoingLeft=false;
  } else if (isCatGoingRight) {
        catX += catVertSpeedValue;
        isCatGoingRight=false;
  } else if (isCatGoingUp) {
<<<<<<< HEAD
        if (catY>195) {
            isCatGoingUp = false;
            catY -= catHorSpeedValue
        }
        else if (catY===195) {
            if (catX+20<215 && 185<<catX && boxArr[0][1]===false) {
                isCatGoingUp = false;
                boxArr[0][1]=true
                catX = canvas.width / 2 ;
                catY = 515;
                winCond+=1
            } else if (catX+20<415 && 385<<catX && boxArr[1][1]===false) {
                isCatGoingUp = false;
                boxArr[1][1]=true
                catX = canvas.width / 2 ;
                catY = 515;
                winCond+=1
            } else if (catX+20<615 && 585<<catX && boxArr[2][1]===false) {
                isCatGoingUp = false;
                boxArr[2][1]=true
                catX = canvas.width / 2 ;
                catY = 515;
                winCond+=1
            }
        } 
        
  } else if (isCatGoingDown) {
      if (catY>515) {
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
            }
        })
    }
    if (catY===435) {

        landObst1.forEach(obst => {
            if (catX >= obst[1]-15 && catX <= obst[1]+obst[3]-25) {
                gameOver=true
            }
        })
    }
    if (catY===315) {
        pltfrmMove=false
        if (catX>canvas.width) {
            gameOver=true}
        pltfrmArr0.forEach(pltfrm => {
        if (catX >= pltfrm[1]-15 && catX <= pltfrm[1]+pltfrm[3]-35) {
                catX+=pltfrm0Speed
                pltfrmMove=true
            }
        })
        if (pltfrmMove===false) {
            gameOver=true
        }
    }
    if (catY===275) {
        pltfrmMove=false
        if (catX+20<0) {
            gameOver=true}
        pltfrmArr1.forEach(pltfrm => {
        if (catX >= pltfrm[1]-15 && catX <= pltfrm[1]+pltfrm[3]-25) {
                catX-=pltfrm1Speed
                pltfrmMove=true
            }
        })
        if (pltfrmMove===false) {
            gameOver=true
        }
    }
    if (catY===235) {
        pltfrmMove=false
        if (catX>canvas.width) {
            gameOver=true}
        pltfrmArr2.forEach(pltfrm => {
        if (catX >= pltfrm[1]-15 && catX <= pltfrm[1]+pltfrm[3]-35) {
                catX+=pltfrm2Speed
                pltfrmMove=true
            }
        })
        if (pltfrmMove===false) {
            gameOver=true
        }
    }
    if (catY===195) {
        pltfrmMove=false
        if (catX+20<0) {
            gameOver=true}
        pltfrmArr3.forEach(pltfrm => {
        if (catX >= pltfrm[1]-15 && catX <= pltfrm[1]+pltfrm[3]-25) {
                catX-=pltfrm3Speed
                pltfrmMove=true
            }
        })
        if (pltfrmMove===false) {
            gameOver=true
        }
        
    }
    if (catY===155) {
        
    }

}

function drawDeadCat() {
    ctx.drawImage(cat2, catX, catY, 45, 50)
}

function drawScore() {
    let score=0
}

function drawResult() {

}

=======
        catY -= catHorSpeedValue
        isCatGoingUp = false;
  } else if (isCatGoingDown) {
        catY += catHorSpeedValue
        isCatGoingDown = false;
}
}

function startGame() {
    startBtn.style.display = "none";
    canvas.style.display = "block";
    animate()
  }
>>>>>>> 6c9f462c3e342fd02655100bebb42e31b78a26cc

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