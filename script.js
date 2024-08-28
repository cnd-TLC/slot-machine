(function () {
  "use strict";

  const items = [
    "🎲",
    "💰",
    "🎯",
    "🍪",
    "🍫",
    "😝",
    "😂",
    "😭",
    "😝",
    "😂",
    "😭"
  ];


  let rolls = 5
  let result = []

  const doors = document.querySelectorAll(".door");
  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);

  async function spin() {
    const duration = parseInt(3);
    
    rolls--
    document.getElementById('rolls').innerHTML = rolls
    document.getElementById('spinner').disabled = true
    document.getElementById('reseter').disabled = true
    init(false, 1, 2);

    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      boxes.style.transform = "translateY(0)";
      await new Promise((resolve) => setTimeout(resolve, duration * 100));
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if(result[0] == result[1] && result[1] == result[2]){
      if(result[0] == "😭")
        Swal.fire({
          title: "<span style='font-size: 4em;'>😭😭</span>",
          text: "Iiyak na yan!"
        })
      if(result[0] == "😂")
        Swal.fire({
          title: "<span style='font-size: 4em;'>😂😂</span>",
          text: "HAHAHAHAHA!"
        })
      if(result[0] == "😝")
        Swal.fire({
          title: "<span style='font-size: 4em;'>😝😝</span>",
          text: "Bleeehhhhhh!"
        })
      if(result[0] == "🎲"){
          Swal.fire({
            title: "<span style='font-size: 4em;'>🎲🎲</span>",
            text: "Roll (+2)!"
          })
          rolls+=2
          document.getElementById('rolls').innerHTML = rolls
          document.getElementById('reseter').style.display = "none"
          document.getElementById('spinner').style.display = "block"
        }
      if(result[0] == "💰")
        Swal.fire({
          title: "<span style='font-size: 4em;'>💰💰</span>",
          text: "Congratulations, 20 pesos!",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/confetti.gif")
            top
            no-repeat
          `
        })
      if(result[0] == "🎯")
        Swal.fire({
          title: "<span style='font-size: 4em;'>🎯🎯</span>",
          text: "Jackpot! 50 pesos!",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/firework.gif")
            top
            no-repeat
          `
        })
      if(result[0] == "🍪")
        Swal.fire({
          title: "<span style='font-size: 4em;'>🍪🍪</span>",
          text: "Congratulations, nanalo ka ng biscuit (x2)",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/confetti.gif")
            top
            no-repeat
          `
        })
      if(result[0] == "🍫")
        Swal.fire({
          title: "<span style='font-size: 4em;'>🍫🍫</span>",
          text: "Congratulations, nanalo ka ng chocolate (x2)",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/confetti.gif")
            top
            no-repeat
          `
        })
    }
    else if(result[0] == result[1] || result[1] == result[2]){
      if(result[1] == "😭")
        Swal.fire({
          title: "<span style='font-size: 4em;'>😭</span>",
          text: "Iiyak na yan!"
        })
      if(result[1] == "😂")
        Swal.fire({
          title: "<span style='font-size: 4em;'>😂</span>",
          text: "HAHAHAHAHA!"
        })
      if(result[1] == "😝")
        Swal.fire({
          title: "<span style='font-size: 4em;'>😝</span>",
          text: "Bleeehhhhhh!"
        })
      if(result[1] == "🎲"){
          Swal.fire({
            title: "<span style='font-size: 4em;'>🎲</span>",
            text: "Roll (+1)!"
          })
          rolls++
          document.getElementById('rolls').innerHTML = rolls
          document.getElementById('reseter').style.display = "none"
          document.getElementById('spinner').style.display = "block"
        }
      if(result[1] == "💰")
        Swal.fire({
          title: "<span style='font-size: 4em;'>💰</span>",
          text: "Congratulations, 10 pesos!",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/confetti.gif")
            top
            no-repeat
          `
        })
      if(result[1] == "🎯")
        Swal.fire({
          title: "<span style='font-size: 4em;'>🎯</span>",
          text: "Kailangan tatlo para makuha ang jackpot!"
        })
      if(result[1] == "🍪")
        Swal.fire({
          title: "<span style='font-size: 4em;'>🍪</span>",
          text: "Congratulations, nanalo ka ng biscuit (x1)",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/confetti.gif")
            top
            no-repeat
          `
        })
      if(result[1] == "🍫")
        Swal.fire({
          title: "<span style='font-size: 4em;'>🍫</span>",
          text: "Congratulations, nanalo ka ng chocolate (x1)",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/confetti.gif")
            top
            no-repeat
          `
        })
    }
    else if(result[0] == result[2]){
      if(result[0] == "😭")
        Swal.fire({
          title: "<span style='font-size: 4em;'>😭</span>",
          text: "Iiyak na yan!"
        })
      if(result[0] == "😂")
        Swal.fire({
          title: "<span style='font-size: 4em;'>😂</span>",
          text: "HAHAHAHAHA!"
        })
      if(result[0] == "😝")
        Swal.fire({
          title: "<span style='font-size: 4em;'>😝</span>",
          text: "Bleeehhhhhh!"
        })
      if(result[0] == "🎲"){
          Swal.fire({
            title: "<span style='font-size: 4em;'>🎲</span>",
            text: "Roll (+1)!"
          })
          rolls++
          document.getElementById('rolls').innerHTML = rolls
          document.getElementById('reseter').style.display = "none"
          document.getElementById('spinner').style.display = "block"
        }
      if(result[0] == "💰")
        Swal.fire({
          title: "<span style='font-size: 4em;'>💰</span>",
          text: "Congratulations, 10 pesos!",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/confetti.gif")
            top
            no-repeat
          `
        })
      if(result[0] == "🎯")
        Swal.fire({
          title: "<span style='font-size: 4em;'>🎯</span>",
          text: "Kailangan tatlo para makuha ang jackpot!"
        })
      if(result[0] == "🍪")
        Swal.fire({
          title: "<span style='font-size: 4em;'>🍪</span>",
          text: "Congratulations, nanalo ka ng biscuit (x1)",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/confetti.gif")
            top
            no-repeat
          `
        })
      if(result[0] == "🍫")
        Swal.fire({
          title: "<span style='font-size: 4em;'>🍫</span>",
          text: "Congratulations, nanalo ka ng chocolate (x1)",
          backdrop: `
            rgba(0,0,123,0.0)
            url("images/confetti.gif")
            top
            no-repeat
          `
        })
    }

    document.getElementById('spinner').disabled = false
    document.getElementById('reseter').disabled = false
  }

  function init(firstInit = true, groups = 1, duration = 1) {
    result = []
    if(firstInit){
      rolls = 5
      document.getElementById('rolls').innerHTML = rolls
    }

    if(rolls > 0){
      document.getElementById('reseter').style.display = "none"
      document.getElementById('spinner').style.display = "block"
    }
    else{
      document.getElementById('reseter').style.display = "block"
      document.getElementById('spinner').style.display = "none"
    }

    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);

      const pool = ["❓"];
      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));
        result.push(pool[11])
        boxesClone.addEventListener(
          "transitionstart",
          function () {
            door.dataset.spinned = "1";
            this.querySelectorAll(".box").forEach((box) => {
              box.style.filter = "blur(1px)";
            });
          },
          { once: false }
        );

        boxesClone.addEventListener(
          "transitionend",
          function () {
            this.querySelectorAll(".box").forEach((box, index) => {
              box.style.filter = "blur(0)";
              if (index > 0) this.removeChild(box);
            });
          },
          { once: false }
        );
      }

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        box.textContent = pool[i];
        boxesClone.appendChild(box);
      }
      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
      }px)`;
      door.replaceChild(boxesClone, boxes);
    }
  }

  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }

  init();
})();
