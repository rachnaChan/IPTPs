
const Text = document.getElementById("text");
const Gender = document.getElementById("gender");
const Name = document.getElementById("name");
const Name1 = document.getElementById("name1");
const Probability = document.getElementById("probability");

function generated() {
  Text.hidden = false;
  Text.innerHTML = "";
  fetch(`https://api.genderize.io?name=${Name.value}`).then(async (res) => {
    let data = await res.json();
    Text.hidden = true;
    Gender.innerHTML = data["gender"];
    Name1.innerHTML = Name.value;
    Probability.innerHTML = data["probability"] * 100 + "%";
    Name1.style.fontSize = "3rem";
    Name1.style.fontWeight = "10px";
    Gender.style.color = "red";
    Gender.style.fontSize = "3rem";
    Gender.style.fontFamily = "Jazz LET, fantasy";
    Probability.style.fontSize = "3rem";
    console.log(data);
  });
}
