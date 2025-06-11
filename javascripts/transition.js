const duration = 1;

window.onload = function() {
    setTimeout(() => {
        while(!document.getElementById("transition-cover")) {
        }
        document.getElementById("transition-cover").classList.add("faded");
    }, 250)
};


function startfadeOut(link) {
    document.getElementById("transition-cover").classList.remove("faded");
    setTimeout(() => {
        window.location.href = link;
    }, 1000)
}