
var Menu = document.getElementById('menu');

Menu.style.maxHeight = "0px";
function toggleMenu() {
    if (Menu.style.maxHeight == "0px") {
        Menu.style.maxHeight = "200px";
    } else{
        Menu.style.maxHeight = "0px";
    }

}
