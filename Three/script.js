
const Text = document.getElementById("texts");
const Name = document.getElementById("name");

function generated() {
  Text.innerHTMl = "";
  fetch(`https://api.nationalize.io?name=${Name.value}`).then(async (res) => {
    const data = await res.json();
  Text.style.fontSize = "0.5rem";
    for (let i=0; i<data.country.length; i++) {
        Text.innerHTML += 
        `        
               <div class="three">
                    <h1>${data.country[i].country_id}</h1>
                    <h1>${data.country[i].probability*100 + "%"} </h1>
                </div>            
        `;
    }
    console.log(data);
  });
}
