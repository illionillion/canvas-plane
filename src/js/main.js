"use strict";

const main = () => {
  // Canvasの要素を取得
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // 棒人間の描画
  function drawStickFigure(x, y, flag = false) {
    // 頭
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // 体
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x, y + 80);

    // 左腕
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x - (flag ? 40 : 45), y + (flag ? 60 : 45));
    
    // 右腕
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x + (flag ? 40 : 45), y + (flag ? 60 : 45));
    // ctx.lineTo(x + 40, y + 60);

    // 左足
    ctx.moveTo(x, y + 80);
    ctx.lineTo(x - 30, y + 120);

    // 右足
    ctx.moveTo(x, y + 80);
    ctx.lineTo(x + 30, y + 120);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  // Canvasのクリア
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // 飛行機の初期位置
  let airplaneX = canvas.width / 2;
  let airplaneY = canvas.height / 2;

  let animationFlag = false;

  setInterval(() => {
    animationFlag = !animationFlag;
    clearCanvas();
    drawStickFigure(airplaneX, airplaneY, animationFlag);
  }, 500);

  // 飛行機の描画と位置の更新
  function update() {
    clearCanvas();

    // 位置の更新
    airplaneX += 1;
    airplaneY += 1;

    // アニメーションのループ
    requestAnimationFrame(update);
  }

  // アニメーションの開始
  //   update();
};

window.addEventListener("load", main);
