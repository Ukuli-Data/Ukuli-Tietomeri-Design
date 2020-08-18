jQuery( document ).ready(function() {
    setInterval(function(){
        var onOrOff = Math.floor((Math.random() * 2));
        console.log(onOrOff);
        setNeonLights(onOrOff);
    }, 3000);
});

function setNeonLights(onOrOff) {
    if(onOrOff) {
        jQuery("#tietomeri-otsikko").addClass("neonlights-on");
        jQuery("#tietomeri-otsikko").removeClass("neonlights-off");
    } else {
        jQuery("#tietomeri-otsikko").addClass("neonlights-off");
        jQuery("#tietomeri-otsikko").removeClass("neonlights-on");
    }
}