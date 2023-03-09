class counter {
    num = 0;
     constructor(i) {
        this.num = i;
        console.log(this.num) }

    decrease() {
        this.num--;
        return this.num; }

    increase() {
        this.num++;
        return this.num; }

    reset() {
        this.num = 0;
        return this.num; }
}

let num = JSON.parse(localStorage.getItem('num'));
    if (!num) {
        num = 0;
        var countt = new counter(num);
    } else {
        document.getElementsByClassName('counters')[0].innerHTML = `<div class="counters">${num}</div>`;
        var countt = new counter(num); }

window.addEventListener('click', function(event) {
    if (event.target.id == 'midBtn') {
        let result = countt.reset();
        setLocalstorage(result);
        document.getElementsByClassName('counters')[0].innerHTML = `<div class="counters">${result}</div>`;
    } else if (event.target.id == 'nextBtn') {
        let result = countt.increase();
        setLocalstorage(result);
        document.getElementsByClassName('counters')[0].innerHTML = `<div class="counters">${result}</div>`;
    } else if (event.target.id == 'prevBtn') {
        let result = countt.decrease();
        setLocalstorage(result);
        document.getElementsByClassName('counters')[0].innerHTML = `<div class="counters">${result}</div>`; }
});

let setLocalstorage = (value) => {
    localStorage.setItem('num', `${value}`);
}