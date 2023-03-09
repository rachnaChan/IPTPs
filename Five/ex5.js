
var menu = () =>{
    let enable = document.getElementById('navigation');
    let list = document.getElementById('item-list');
    if(enable.className == 'bar'){
        enable.className += 'responsed';
        list.className += 'box-90';
    }else{
        enable.className = 'bar';
        list.className = 'box boxes';
    }
}