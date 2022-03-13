// "use strict";

// NA
// var anchors = document.getElementsByClassName("side-link");
// var burger = document.getElementById("burger");


// // Toggles lins style
// for(var x of anchors){
//     x.addEventListener("click", function(){
//         for(var x of anchors){
//             x.classList.remove("selected");
//         }

//         this.classList.add("selected");
//     })
// }
// // Toggles lins display and burger style
// burger.addEventListener("click", function(){
//     for(var x of anchors){
//         x.classList.toggle("block");
//         x.classList.remove("selected");
//     }

//     this.classList.toggle("rotate");
// });

// //  Change on resize

// window.addEventListener("resize", function(){
//     for(var x of anchors){
//         x.classList.remove("block");
//         x.classList.remove("selected");
//     }
//     burger.classList.remove("rotate");
// });

// END OF NAVIGATION



// Swiper

"use strict";

var buttons = document.getElementsByTagName("button");

for (var x of buttons){
    x.addEventListener("click", function(){
        for (var y of buttons){
            y.classList.remove("active");
        }

        this.classList.add("active");
        var index = this.getAttribute("index");
        swiper.slideTo(index, 1000);
    })
}