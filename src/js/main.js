"use strict";

const main = () => {
  // Canvasの要素を取得
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // 棒人間の描画
  function drawStickFigure(x, y, frame) {
    const legOffset = Math.sin(frame / 10) * 10;

    // 頭
    ctx.beginPath();
    ctx.arc(x, y - 60, 20, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // 体
    ctx.moveTo(x, y - 40);
    ctx.lineTo(x, y + 20);

    // 左腕
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x - 40, y + 25 - legOffset);

    // 右腕
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x + 40, y + 25 + legOffset);

    // 左足
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x - 30, y + 80 + legOffset);

    // 右足
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x + 30, y + 80 - legOffset);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  // Canvasのクリア
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // 棒人間の初期位置
  let stickFigureX = canvas.width / 2;
  let stickFigureY = canvas.height / 2;

  // アニメーションのフレーム数と速度
  let frame = 0;
  const speed = 3;

  // 棒人間の描画と位置の更新
  function update() {
    clearCanvas();
    drawStickFigure(stickFigureX, stickFigureY, frame);

    // 位置の更新
    // stickFigureX += speed;

    // フレーム数の更新
    frame++;

    // アニメーションのループ
    requestAnimationFrame(update);
  }

  // アニメーションの開始
  update();
};

window.addEventListener("load", main);
