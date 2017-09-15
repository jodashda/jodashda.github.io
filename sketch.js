var x = 0;
var y = 0;
var bredde = 100;
var lengde = 200;
var øk = true;
var minuse = false;
var boolInput;
var inkrement = 1;
var rødFarge = (255, 0, 0);
var svartFarge = (0,0,0);


function setup() {
  
        createCanvas(720, 400);  
        stroke(255);    
        frameRate(30);
}


function draw() { 
        background(svartFarge);   // Set the background to black
        fill(255,255,255);
        rect(this.x, this.y, this.bredde, this.lengde);
        
    if (lengde <= 1 || bredde <= 1) {
        svartFarge = rødFarge;
    }
} 

function settInkrement() {
    
    inkrement = prompt("Hvor mye vil du endre per klikk?")
    inkrement = Number(inkrement);
}

function switchBool(boolInput) {
    
   boolInput = !boolInput; 
}

function main() {
    
   // alert(inkrement);
    x = prompt("Hvilken X vil du bruke?");
    y = prompt("Hvilken Y vil du bruke?");

}

function modifiserBredde() {
    
    if (øk){
    bredde = bredde + inkrement;
    }else if(minuse) {
    bredde = bredde - inkrement;  
    }
}

function modifiserLengde() {
    
    if (øk){
    lengde = lengde + inkrement;
    }else if(minuse) {
    lengde = lengde - inkrement;
    }
}



function _switchState() {
     øk = !øk;
    minuse = !minuse; 
}

function endreVei() {
    
    _switchState();
    
    var lengdeKnapp = document.getElementById("lengdeKnapp");
    if (lengdeKnapp.innerHTML =="Øk lengde på rektangelet"){
        
        lengdeKnapp.innerHTML = "Minimer lengde på rektangelet";
    }else if(lengdeKnapp.innerHTML == "Minimer lengde på rektangelet"){
        lengdeKnapp.innerHTML = "Øk lengde på rektangelet";
    }
    
    var breddeKnapp = document.getElementById("breddeKnapp");
    if (breddeKnapp.innerHTML == "Øk bredde på rektangelet") {
        breddeKnapp.innerHTML = "Minimer bredde på rektangelet";
    }else if (breddeKnapp.innerHTML == "Minimer bredde på rektangelet") {
        breddeKnapp.innerHTML = "Øk bredde på rektangelet";
    }
}