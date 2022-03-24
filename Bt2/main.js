var numberList = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 100)
);
function createArray() {
  numberList = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 100)
  );
  renderNumber()
} 
renderNumber()
function renderNumber() {
  document.getElementById("numberList").innerHTML = "";
  if (document.getElementById("increase").checked) {
    numberList.sort(function (a, b) {
      return a - b;
    });
  }
  if (document.getElementById("deincrease").checked) {
    numberList.sort(function (a, b) {
      return b - a;
    });
  }
  for (var i = 0; i < numberList.length; i++) {
    if (i !== numberList.length - 1) {
      document.getElementById("numberList").innerHTML += numberList[i] + ",";
    } else {
      document.getElementById("numberList").innerHTML += numberList[i];
    }
  }
}
function getValue() {
  var number = Number(document.getElementById("valueInput").value);
  var position = Number(document.getElementById("position").value);
  numberList.splice(position, 0, number);
  renderNumber();
  document.getElementById("valueAfterGet").innerHTML = number;
}

function toggleCheckbox(x, y) {
  if (document.getElementById(x).checked) {
    document.getElementById(y).checked = false;
    renderNumber();
  }
  if (document.getElementById(x).checked) {
    document.getElementById(y).checked = false;
    renderNumber();
  }
}
