const duration = 1;

window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            setTimeout(() => {
                document.getElementById("transition-cover").classList.add("faded");
                console.log(document.getElementById("transition-cover").classList);
            }, 250);
        } else {
            // Code to execute when the page is loaded normally
            setTimeout(() => {
                document.getElementById("transition-cover").classList.add("faded");
                console.log(document.getElementById("transition-cover").classList);
            }, 250);
        }
    });


function startfadeOut(link) {
    document.getElementById("transition-cover").classList.remove("faded");
    setTimeout(() => {
        window.location.href = link;
    }, 1000)
}