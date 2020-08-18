jQuery( document ).ready(function() {
    setInterval(function(){
        var onOrOff = Math.floor((Math.random() * 2));
        setNeonLights();
    }, 3000);
});

function setNeonLights(onOrOff) {
    if(onOrOff) {
        jQuery(".neonlights-off").addClass(".neonlights-on");
        jQuery(".neonlights-off").removeClass(".neonlights-off");
    } else {
        jQuery(".neonlights-on").addClass(".neonlights-off");
        jQuery(".neonlights-on").removeClass(".neonlights-on");
    }
}