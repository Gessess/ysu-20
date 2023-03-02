var ball = document.querySelector('.ball');
var player = document.querySelector('.player');
var hoop = document.querySelector('.hoop');
var shootBtn = document.getElementById('shoot-btn');
var resetBtn = document.getElementById('reset-btn');
var player1Score = document.getElementById('player1score');
var player2Score = document.getElementById('player2score');
var player1Turn = true;

function shootBall() {
    if (ball.classList.contains('moving')) {
        return;
    }

    ball.classList.add('moving');

    var playerPosition = player.getBoundingClientRect();
    var hoopPosition = hoop.getBoundingClientRect();
    var ballPosition = ball.getBoundingClientRect();
    var ballSpeed = 10;
    var basketScore = 2;

    var ballInterval = setInterval(function() {
        var ballTop = ballPosition.top - ballSpeed;
        var ballLeft = ballPosition.left;

        if (ballTop <= hoopPosition.top) {
            clearInterval(ballInterval);

            if (ballLeft >= hoopPosition.left && ballLeft <= hoopPosition.right) {
                if (player1Turn) {
                    player1Score.textContent = parseInt
                    var score = basketScore + Math.floor(Math.random() * 10);
                    player1Score.textContent = parseInt(score) + parseInt(player1Score.textContent);
                    alert('Player 1 scores ' + score + ' points!');
                } else {
                    player2Score.textContent = parseInt(basketScore) + parseInt(player2Score.textContent);
                    alert('Player 2 scores 2 points!');
                }
            } else {
                alert('Missed the basket!');
            }

            ball.classList.remove('moving');

            if (player1Turn) {
                player1Turn = false;
            } else {
                player1Turn = true;
            }
        } else {
            ball.style.top = ballTop + 'px';
        }
    }, 50);
}

function resetGame() {
    player1Score.textContent = 0;
    player2Score.textContent = 0;
}

shootBtn.addEventListener('click', shootBall);
resetBtn.addEventListener('click', resetGame);