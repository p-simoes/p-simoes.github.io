let lightButton = document.getElementById("lightButton")
let darkModeJS = document.querySelectorAll(".darkMode")
let count = 0;

lightButton.addEventListener("click", function(){
    count > 0 ? (
        darkModeJS.forEach(function (i) {
            i.classList.remove("lightMode")
            i.classList.add("darkMode")
        }),
        count--) : (darkModeJS.forEach(function (i) {
            i.classList.remove("darkMode")
            i.classList.add("lightMode")
        }),
        count++)
})
