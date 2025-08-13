const inputField = document.querySelector(".inputField");
const check = document.querySelector(".checkBtn");
// console.log(check);

const tipDis = document.querySelector(".tipsDisplay");
const preChoice = document.querySelector(".previousChoice");
const balance = document.querySelector(".balance");
const showNum = document.querySelector(".showNumber");
const showBtn = document.querySelector(".showBtn");
const hideBtn = document.querySelector(".hideBtn");
const reset = document.querySelector(".reset");
const quit = document.querySelector(".quit");
const startButton = document.querySelector(".startButton");
const start = document.querySelector(".start");
const main = document.querySelector(".main");

let x = localStorage.getItem("secretNum");
console.log(x);

if (!x) {
  x = Math.floor(Math.random() * 50) + 1;
  localStorage.setItem("secretNum", JSON.stringify(x));
}
let guess = 1;
let maxGuess = 10;
// console.log(x);

let collectionNum = localStorage.getItem("numData");
let collection = JSON.parse(collectionNum) || [];
console.log(collection);

preChoice.textContent = collection;
balance.textContent = maxGuess - collection.length;

function startGame() {
  startButton.classList.toggle("hideTop");
  main.classList.toggle("startClick");
  let x = localStorage.getItem("secretNum");
  console.log(x);

  if (!x) {
    x = Math.floor(Math.random() * 50) + 1;
    localStorage.setItem("secretNum", JSON.stringify(x));
  }
}

start.addEventListener("click", function () {
  startGame();
});

function game() {
  check.addEventListener("click", function () {
    const getNum = inputField.value;
    console.log(getNum);

    collection.push(getNum);
    console.log(collection);

    localStorage.setItem("numData", JSON.stringify(collection));

    preChoice.textContent = collection;
    balance.textContent = maxGuess - guess;

    // console.log(getNum);
    // console.log(collection);
    if (getNum > 50) {
      tipDis.textContent = "Enter 1 to 50 number only...";
      inputField.value = "";
    } else if (getNum == x) {
      tipDis.textContent = `Congrats ! You did it in ${guess} Guess`;
      setTimeout(() => {
        localStorage.removeItem("secretNum");
        localStorage.removeItem("numData");
        window.location.reload();
      }, 2000);
    } else if (getNum < x) {
      guess++;
      tipDis.textContent = "Oop ! Try Greater Number";
      inputField.value = "";
    } else {
      guess++;
      tipDis.textContent = "Oop ! Try Smaller Number";
      inputField.value = "";
    }

    function end() {
      setTimeout(() => {
        localStorage.clear();
        window.location.reload();
      }, 2500);
    }
    if (guess > maxGuess) {
      tipDis.textContent = `No more guess ! you lost ! The number is ${x}`;
      end();
    }
    // console.log(guess);
  });
}

showBtn.addEventListener("click", function () {
  showNum.textContent = x;
});

hideBtn.addEventListener("click", function () {
  showNum.textContent = "";
});

reset.addEventListener("click", function () {
  guess = 1;
  // x = Math.floor(Math.random() * 50) + 1;
  localStorage.removeItem("numData");
  localStorage.removeItem("secretNum");
  window.location.reload();

  // localStorage.setItem("numData", JSON.stringify(collection));
});

quit.addEventListener("click", function () {
  setTimeout(() => {
    localStorage.clear();
    window.location.reload();
  }, 1000);
});
game();

// window.addEventListener("DOMContentLoaded", function () {
//   const getSNum = this.localStorage.getItem("secretNum");
//   const storeItem = this.localStorage.getItem("numData");
//   const getNum = document.querySelector(".inputField").value;

// console.log(snum);

// if (storeItem && getSNum) {
//   const snum = JSON.parse(getSNum);
//   console.log(snum);

//   const parsedData = JSON.parse(storeItem);
//   parsedData.forEach((inputNum) => {
//     console.log(inputNum);
//     if (inputNum !== getNum) {
//       parsedData.push(getNum);
//     }
//     console.log(parsedData);
// preChoice.textContent = parsedData;
// balance.textContent = maxGuess - guess;

// this.document.querySelector(".inputField", (getNum) => {
//   if (getNum == snum) {
//     tipDis.textContent = `Congrats ! You did it in ${guess} Guess`;
//     setTimeout(() => {
//       collection.values = "";
//       window.location.reload();
//     }, 2000);
//   } else if (getNum < x) {
//     guess++;
//     tipDis.textContent = "Oop ! Try Greater Number";
//     inputField.value = "";
//   } else {
//     guess++;
//     tipDis.textContent = "Oop ! Try Smaller Number";
//     inputField.value = "";
//   }
// });
//     });
//   }
// });
