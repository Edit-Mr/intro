/** @format */

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

document.body.style.opacity = 1;


   // const cursorCircle = document.querySelector(".cursor-circle");
            // document.addEventListener("mousemove", e => {
            //     var x = e.clientX;
            //     var y = e.clientY;
            //     cursorCircle.style.width = "20px";
            //     cursorCircle.style.height = "20px";
            //     cursorCircle.style.left = x + "px";
            //     cursorCircle.style.top = y + "px";
            // });
        