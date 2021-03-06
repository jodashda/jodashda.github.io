
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var isbjørnen = "data:image/jpeg;base64,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";

var arrayen = Array();
var antall = arrayen.length-1;
var current = 0;

function bildetilbake() {
    if (current > 0) {
        current --;
    } else if (current == 0) {
        current = antall;
    }
    
    console.log(current);
    
    selveByttingen();
}

function bilderullering() {
  
    
    if (current < antall) {
        current ++;
    } else if (current == antall) {
        current = 0;
    }
    
    console.log(current);
    
    selveByttingen(); 
 
}

var cokkiestatus;

    
if (document.cookie.length != 0) {
    cookiestatus = "satt";
    console.log(cookiestatus);
    arrayen = JSON.parse(document.cookie);
}



function selveByttingen() {
    
    console.log(arrayen[current]);
    
    document.getElementById("bildet").src = arrayen[current];
    
}

var enable = false;
var sekunder = 1;

function bildebs() {
    
 //   alert("aktivert!");
    
    enable = !enable;

}

function inputfunc(event) {
    if (event.keyCode == 13) {
        console.log("enter");
        arrayen.push(document.getElementById("inputen").value);
        antall = arrayen.length-1;
        document.getElementById("inputen").value = "";
        
        jsonen = JSON.stringify(arrayen);
        console.log("json:"+jsonen);
        
        setCookie("jsonen", jsonen, 1);
        
        document.getElementById("inputen").value = jsonen;
        console.log(JSON.parse(jsonen));
        
        console.log("cookie:"+getCookie("jsonen"));
    }
}

setInterval(function(){
    if (enable) {
        bilderullering();
    }
}, sekunder * 1000)


function inputbsfunc(event) {
    
    
    console.log(document.cookie);
    
   //console.log(event +"Du skrev"+ " " + event.key);
    
}
