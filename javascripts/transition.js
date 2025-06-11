const duration = 1;

window.onload = function() {
    setTimeout(() => {
        document.getElementById("transition-cover").classList.add("faded");
        console.log(document.getElementById("transition-cover").classList);
    }, 250)
};

window.addEventListener('load', function () {
  setTimeout(() => {
        document.getElementById("transition-cover").classList.add("faded");
        console.log(document.getElementById("transition-cover").classList);
    }, 250)
})


function startfadeOut(link) {
    document.getElementById("transition-cover").classList.remove("faded");
    setTimeout(() => {
        window.location.href = link;
    }, 1000)
}