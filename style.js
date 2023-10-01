
var Menu = document.getElementById('menu');

Menu.style.maxHeight = "0px";
function toggleMenu() {
    if (Menu.style.maxHeight == "0px") {
        Menu.style.maxHeight = "200px";
    } else{
        Menu.style.maxHeight = "0px";
    }

}

const imgs = document.querySelectorAll(".img");
const bigImage = document.querySelector(".img-details")

imgs.forEach(function(img) {
    img.addEventListener('click', (e) =>{
            var target = e.currentTarget.classList;

            if(target.contains('img1')) {
                bigImage.src = 'images/gallery-1.jpg'
            }else if(target.contains('img2')) {
                bigImage.src = 'images/gallery-2.jpg'

            }
            else if(target.contains('img3')) {
                bigImage.src = 'images/gallery-3.jpg'

            }
            else if(target.contains('img4')) {
                bigImage.src = 'images/gallery-4.jpg'

            }

    

    })
})

