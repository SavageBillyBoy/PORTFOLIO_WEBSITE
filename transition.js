const duration = 1;

window.onload = function() {
    document.getElementById("transition-cover").classList.add("faded");
};

function startfadeOut(link) {
    document.getElementById("transition-cover").classList.remove("faded");
    setTimeout(() => {
        window.location.href = link;
    }, 1000)
}