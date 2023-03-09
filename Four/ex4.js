class Color {
  colorType = "";
  record = [];
  constructor(type) {
    this.colorType = type;
  }
  generates() {
    let i;
    var data = [{}];
    var colors = JSON.parse(localStorage.getItem("color"));
    if (!colors) {
      i = 0;
    } else {
      data = Object.assign([{}], colors);
      i = colors.length;
    }

    console.log(i);

    for (let a = 0; a < 6; a++) {
      const random = Math.random();
      const hexa = (random * 16) | 0;
      this.colorType += hexa.toString(16);
    }

    data[i] = Object.assign(
      {},
      {
        color: `${this.colorType}`,
      }
    );

    console.log(data);

    this.colorType = "#";
    localStorage.setItem("color", JSON.stringify(data));
    document.getElementsByClassName(
      "item"
    )[0].innerHTML += `<div class="items"><span>${data[i].color}</span><div class="box"><div></div>`;
    document.getElementsByClassName("box")[
      i
    ].style.backgroundColor = `${data[i].color}`;
    document.getElementsByClassName("result")[0].innerHTML = `${data[i].color}`;
    document.getElementsByClassName(
      "color"
    )[0].style.backgroundColor = `${data[i].color}`;
    document.getElementsByClassName(
      "button"
    )[0].style.backgroundColor = `${data[i].color}`;

    return this.data;
  }

  getRecords() {
    this.records = JSON.parse(localStorage.getItem("color"));
    return this.records;
  }

  reset() {
    localStorage.removeItem("color");
  }
}

let hexadecimal = "#";
var colorss = new Color(hexadecimal);
var records = colorss.getRecords();

console.log(records);

if (!records) {
  console.log(colorss.getRecords());
} else {
  for (record in records) {
    document.getElementsByClassName(
      "item"
    )[0].innerHTML += `<div class="items"><span>${records[record].color}</span><div class="box"></div></div>`;
    document.getElementsByClassName("box")[
      record
    ].style.backgroundColor = `${records[record].color}`;
  }
}

window.addEventListener("click", function (event) {
  if (event.target.id == "generates") {
    colorss.generates();
  } else if (event.target.id == "reset") {
    colorss.reset();
    document.getElementsByClassName("item")[0].innerHTML = "";
    document.getElementsByClassName("result")[0].innerHTML = "";
    document.getElementsByClassName("color")[0].style.backgroundColor = "";
    document.getElementsByClassName("button")[0].style.backgroundColor = "";
  }
});
