
const Text = document.getElementById("texts");
const Activity = document.getElementById("activities");
const Type = document.getElementById("types");
const Participant = document.getElementById("participants");
const Price = document.getElementById("price");
const Link = document.getElementById("links");
const Key = document.getElementById("keys");
const Accessibility = document.getElementById("accessibilities");
Activity.innerHTML = "";

function generated() {
  Activity.innerHTML = "";
  Text.hidden = false;
  Text.innerHTML = "";
  fetch("https://www.boredapi.com/api/activity").then(async (res) => {
    let data = await res.json();
    Text.hidden = true;
    Activity.innerHTML = data["activity"];
    Type.innerHTML = data["type"];
    Participant.innerHTML = data["participants"];
    Price.innerHTML = data["price"];
    Link.innerHTML = data["link"];
    Key.innerHTML = data["key"];
    Accessibility.innerHTML = data["accessibility"];
  });
}




    // console.log(data);
    // // res.json().then((data) =>{
    // //     console.log(data);
    // // });