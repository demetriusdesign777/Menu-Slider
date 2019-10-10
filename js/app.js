var menus = document.querySelectorAll(".imgMenu");
var closeBtns = document.querySelectorAll(".closeBtn");

menus.forEach(function(menu) {
    menu.addEventListener("click", function(e) {
        if(e.currentTarget.parentElement.className == "appHeader") {
            // App Menu
            e.currentTarget.parentElement.previousElementSibling.style.width = "100%";
        } else {
            // Full Screen Menu
            e.currentTarget.parentElement.previousElementSibling.style.width = "100%";
        }
    })
})

closeBtns.forEach(function(closeBtn) {
    closeBtn.addEventListener("click", function(e) {
        if(e.currentTarget.parentElement.className == "appOverlayMenu") {
            // App Menu Close Btn
            e.currentTarget.parentElement.style.width = "0px";
        } else {
            // Full Screen Menu Close Btn
            e.currentTarget.parentElement.style.width = "0px";
        }
    })
})
