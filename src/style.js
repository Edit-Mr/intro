/** @format */

const getCookie = name => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
};
const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};
const lang =
    getCookie("lang") ||
    ((navigator.language || navigator.userLanguage).includes("zh")
        ? "zh-hant"
        : "en");
// when page loaded
if (
    lang === "zh-hant" &&
    !window.location.pathname.toLowerCase().includes("zh-hant")
) {
    window.location.href = `/zh-Hant${window.location.pathname}`;
}

document.getElementById("toggleLang").addEventListener("click", e => {
    const newLang = lang === "en" ? "zh-hant" : "en";
    setCookie("lang", newLang, 365);
});

// if any <a> been pressed, set body opacity = 0
document.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        let a = e.target.closest("a"); // Find the closest <a> element (in case of nested elements)
        if (!a) return;
        console.log(a);
        if (a.getAttribute("target") !== "_blank" && !e.ctrlKey && !e.metaKey) {
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = a.href;
            }, 300);
        } else {
            window.open(a.href, "_blank");
        }
    });
});

// aos

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.top > window.innerHeight;
}

function addClassToVisibleElements() {
    var aosElements = document.querySelectorAll(".aos, li");
    aosElements.forEach(function (aosElement) {
        if (!isElementInViewport(aosElement)) aosElement.classList.add("ed");
        else aosElement.classList.remove("ed");
    });
}

const showBody = () => {
    document.body.style.opacity = 1;
    setTimeout(() => {
        addClassToVisibleElements();
    }, 300);
};

document.addEventListener("scroll", addClassToVisibleElements);
window.addEventListener("pageshow", showBody);

// const cursorCircle = document.querySelector(".cursor-circle");
// document.addEventListener("mousemove", e => {
//     var x = e.clientX;
//     var y = e.clientY;
//     cursorCircle.style.width = "20px";
//     cursorCircle.style.height = "20px";
//     cursorCircle.style.left = x + "px";
//     cursorCircle.style.top = y + "px";
// });
