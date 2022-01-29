//selecting all displays
const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");

// selectiing all operation
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");

// selecting all number
const numberEl = document.querySelectorAll(".number");

//selecting delete element
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");

//declaring veriables
let dis1num = "";
let dis2num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

//add event Listerner fro number
numberEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    //checking first dot or not. if firstdot making it true
    if (e.target.innerText === "." && !haveDot) haveDot = true;
    else if (e.target.innerText === "." && haveDot) return;

    //if a number is clicked then we add it display
    dis2num = dis2num + e.target.innerText;
    display2El.innerText = dis2num;
  });
});

//add event Lister for all operation
operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2num) return;
    haveDot = false;

    const operationName = e.target.innerText;
    lastOperation = operationName;
    if (dis2num && dis1num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2num); //parseFloat convert string into num
    }
    clearVar(operationName);

    //console.log(result);
  });
});

function clearVar(operationName = " ") {
  dis1num += dis2num + " " + operationName + " ";
  display1El.innerText = dis1num;
  display2El.innerText = "";
  dis2num = "";
  tempResultEl.innerText = result;
}

//function math operation
function mathOperation() {
  if (lastOperation === "X") {
    result = parseFloat(result) * parseFloat(dis2num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2num);
  }
}

// functionality for equal button

equalEl.addEventListener("click", (e) => {
  if (!dis2num || !dis1num) return;
  haveDot = true;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  dis2num = result;
  dis1num = "";
});

//clearing all the display when C is pressed.
clearAllEl.addEventListener("click", (e) => {
  display1El.innerText = "";
  display2El.innerText = "";
  dis1num = 0;
  dis2num = 0;
  result = 0;
  tempResultEl.innerText = 0;
});

//clearing the last entity when CE is pressed
clearLastEl.addEventListener("click", (e) => {
  display2El.innerText = "";
  dis2num = "";
});
