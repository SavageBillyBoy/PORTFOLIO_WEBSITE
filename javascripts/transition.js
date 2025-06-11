const duration = 1;

setTimeout(() => {
    document.getElementById("transition-cover").classList.add("faded");
}, 250)


function startfadeOut(link) {
    document.getElementById("transition-cover").classList.remove("faded");
    setTimeout(() => {
        window.location.href = link;
    }, 1000)
}