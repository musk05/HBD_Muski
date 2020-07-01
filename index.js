
function myf(){
setInterval(function(){
    var vispop=document.getElementById("pop");
    if(window.getComputedStyle(vispop).visibility === "hidden"){
        vispop.style.visibility= "visible";
}
        else{
        vispop.style.visibility= "hidden";
}
}, 2000 );

setInterval(function(){
    var visc=document.getElementById("c");
    if(window.getComputedStyle(visc).visibility === "hidden"){
        visc.style.visibility= "visible";
}
        else{
        visc.style.visibility= "hidden";
}
}, 2500 );
}
window.myf();
