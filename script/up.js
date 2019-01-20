var up = document.querySelector(".up");

up.addEventListener("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior : "smooth"
    })
    up.style.color = "#21c0c0"
})