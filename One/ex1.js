const loader = document.getElementsByClassName("loading");
const menu = document.getElementsByClassName("main");
const scroller = document.getElementById("scrolls");

let test = true;
let currentPage = 0;
let numPage = 0;
let outPut = "";

const loadData = () => {
  try { fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=${12}`
    ).then(async (arrData) => {
      let results = await arrData.json();
      let airline = "";
      for (let result = 0; result < 12; result++) {
        airline = results.data[result].airline;

        outPut +=
          `<div class="items">` +
          `<div>&#128747: ${airline[0].name} - ${airline[0].country}</div>` +
          `<div>&#128515: ${results.data[result].name}</div>` +
          `</div>`;
      }
      setTimeout(async () => {
        await loading(false);
      }, 1000);

      if (currentPage == 2500) {
        outPut += `<div style="text-align: center;">End</div>`;
      } else {
        outPut += `<hr>`;
      }
      scroller.innerHTML = outPut;

      test = true;
    });
  } catch (error) {
    console.log(error);
    currentPage--;
  }
};

const loading = (load) => {
  if (load == true) {
    loader[0].style.display = "flex";
    menu[0].style.display = "none";
  } else {
    loader[0].style.display = "none";
    menu[0].style.display = "flex";
  }
};

const pageNumber = (num) => {
  document.getElementsByClassName(
    "pageNumbers"
  )[0].innerHTML = `Page: <span>${num}</span>`;
};

loading(true);
loadData();

scroller.addEventListener("scroll", () => {
  const clientHeight = scroller.clientHeight;
  const scollHeight = scroller.scrollHeight;
  const scrollTop = scroller.scrollTop;

  if (
    clientHeight + scrollTop + 200 >= scollHeight &&
    test == true &&
    currentPage <= 2499
  ) {
    console.log("loading");
    loadData();
    currentPage++;
    test = false;
  }

  if (clientHeight + scrollTop > 1000 * (numPage + 1) + 580) {
    numPage++;
    pageNumber(numPage);
    console.log(numPage);
  } else if (clientHeight + scrollTop <= 1000 * numPage + 480) {
    numPage--;
    pageNumber(numPage);
    console.log(numPage);
  }
});
