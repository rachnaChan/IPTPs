
var sidebar = () => {
    let enable = document.getElementById('sidebars');

    if (enable.className == 'bar') {
        enable.className += ' responed';
        document.getElementsByClassName('list-menu')[0].style.display = 'none';
    } else {
        enable.className = 'bar';
        document.getElementsByClassName('list-menu')[0].style.display = 'block';
    }
}