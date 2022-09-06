// Toggle nav menu
const navTogglerBtn = document.getElementById("nav-toggler");
const navigationMenu = document.getElementById("navigation");

navTogglerBtn.addEventListener("click", (e) => {
    navTogglerBtn.classList.toggle("menu-opened");
    navigationMenu.classList.toggle("show");
});

// Hide nav menu on click outside
document.addEventListener("mouseup", (e) => {
    let el = e.target.closest("#nav-toggler");
    let el2 = e.target.closest("#navigation");
    if (el2 == null && el == null) {
        navigationMenu.classList.remove("show");
        navTogglerBtn.classList.remove("menu-opened");
    }
});

// Slider
var slider = tns({
    container: ".review-container",
    items: 1,
    gutter: 30,
    autoHeight: true,
    controls: true,
    mouseDrag: true,
    swipeAngle: false,
    navPosition: "bottom",
    controlsText: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg>`,
    ],
});

// Accordion
function initAcc(elem, option) {
    document.addEventListener("click", function (e) {
        if (!e.target.matches(elem + " .accordion-btn")) return;
        else {
            if (!e.target.parentElement.classList.contains("active")) {
                if (option == true) {
                    var elementList = document.querySelectorAll(elem + " .accordion-item");
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove("active");
                    });
                }
                e.target.parentElement.classList.add("active");
            } else {
                e.target.parentElement.classList.remove("active");
            }
        }
    });
}

initAcc(".accordion", true);
